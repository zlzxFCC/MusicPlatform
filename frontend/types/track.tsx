import { IComment } from './comment'

export interface ITrack {
  _id: string
  name: string
  artist: string
  listens: number
  picture: string
  audio: string
  text: string
  comments: IComment[]
}