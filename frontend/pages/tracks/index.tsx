import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Grid, Card, Button, Box } from '@material-ui/core'
import { useRouter } from 'next/router'
import TrackList from '../../components/TrackList/TrackList'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchTracks } from '../../store/actions-creators/track'

const index = () => {
  const router = useRouter()
  const { tracks, error } = useTypedSelector(state => state.track)

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Список терков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default index

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await fetchTracks())
})