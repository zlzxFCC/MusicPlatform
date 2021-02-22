import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Grid, Card, Button, Box } from '@material-ui/core'
import { useRouter } from 'next/router'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList/TrackList'

const index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {
      comments: [],
      _id: '60341476f029120ee0a9217c',
      name: 'Забил',
      text: 'Text track',
      listens: 0,
      audio: 'http://localhost:5000/audio/b7f4f913-6877-4d65-ad79-58f1de6e8a2d.mp3',
      picture: 'http://localhost:5000/image/99893f29-9ad2-41cc-a30e-66b76d0e04ef.jpg',
      artist: 'ATL'
    },
    {
      comments: [],
      _id: '6034164a7d2e8c3c6cf7c1b3',
      name: 'Моя игра',
      text: 'Text track',
      artist: 'Basta',
      listens: 0,
      audio: 'http://localhost:5000/audio/09ff8dee-36a6-4f1b-bf33-f8ab1172500e.mp3',
      picture: 'http://localhost:5000/image/c4be841f-a609-477d-b25e-8738d5bd74c8.jpg'
    },
    {
      comments: [],
      _id: '603415aabd1ff442e097c216',
      name: 'Город дорог',
      text: 'Text track',
      listens: 0,
      audio: 'http://localhost:5000/audio/9cdbcf96-1c50-4eb8-90bc-2f99e12fa375.mp3',
      picture: 'http://localhost:5000/image/7b1894ad-9309-4040-a4fe-173f4159228f.jpg',
      artist: 'Guf'
    }
  ]

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
