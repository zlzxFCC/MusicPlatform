import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Grid, Card, Button, Box } from '@material-ui/core'
import { useRouter } from 'next/router'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList/TrackList'

const index = () => {
  const router = useRouter()
  const tracks : ITrack[] = []

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width: 900}}>
         <Box p={3}>
           <Grid container justifyContent='space-between'>
             <h1>Список терков</h1>
             <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
           </Grid>
         </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default index
