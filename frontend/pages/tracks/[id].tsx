import React from 'react'
import { ITrack } from '../../types/track'
import MainLayout from '../../layouts/MainLayout'
import { Button, Grid, TextField } from '@material-ui/core'
import { useRouter } from 'next/router'
import { TextFields } from '@material-ui/icons'
import { comment } from 'postcss'

const TrackPage = () => {
  const track: ITrack = {
    comments: [],
    _id: '603415aabd1ff442e097c216',
    name: 'Город дорог',
    text: 'Text track',
    listens: 0,
    audio: 'http://localhost:5000/audio/9cdbcf96-1c50-4eb8-90bc-2f99e12fa375.mp3',
    picture: 'http://localhost:5000/image/7b1894ad-9309-4040-a4fe-173f4159228f.jpg',
    artist: 'Guf'
  }

  const router = useRouter()

  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 32 }}
        onClick={() => router.push('tracks')}
      >
        К списку
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={track.picture} width={200} height={200} alt='poster' />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Коментарии</h1>
      <Grid container>
        <TextField
          label='Ваше имя'
          fullWidth
        />
        <TextField
          label="Комментарий"
          fullWidth
          multiline
          rows={4}
        />
        <Button> Отправить </Button>
      </Grid>
      <div>
        {track.comments.map(comment => (
          <div>
            <div>Автор - {comment.username}</div>
            <div>Коментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default TrackPage
