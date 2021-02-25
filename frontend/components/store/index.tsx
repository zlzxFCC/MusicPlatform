import { Context, createWrapper, MakeStore } from 'next-redux-wrapper'
import { reducer, RootState } from './reducers'
import { createStore } from 'redux'


const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer)

export const wrapper = createWrapper<RootState>(makeStore, { debug: true })