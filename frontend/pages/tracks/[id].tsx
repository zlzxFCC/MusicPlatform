import React, { useState } from 'react'
import { ITrack } from '../../types/track'
import MainLayout from '../../layouts/MainLayout'
import { Button, Grid, TextField } from '@material-ui/core'
import { useRouter } from 'next/router'
import { TextFields } from '@material-ui/icons'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useInput } from '../../hooks/useInput'

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState(serverTrack)
  const router = useRouter()
  const name = useInput('')
  const text = useInput('')

  const addComment = async () => {
    try{
      const response = await axios.post('http://localhost:5000/tracks/comment', {
        username : username.value,
        text : text.value,
        trackId : track._id
      })
      setTrack({...track, comments : [...track.comments, response.data]})
    } catch (e) {

    }
  }

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
        <img src={'http://localhost:5000/' + track.picture} width={200} height={200} alt='poster' />
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
          {...name}
        />
        <TextField
          label="Комментарий"
          fullWidth
          multiline
          rows={4}
          {...text}
        />
        <Button onClick={addComment}> Отправить </Button>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params.id)
  return {
    props: {
      serverTrack: response.data
    }
  }
}