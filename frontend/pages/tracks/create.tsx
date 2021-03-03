import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import StepWrapper from '../../components/StepWrapper/StepWrapper'
import { Button, Grid, TextField } from '@material-ui/core'
import FileUpload from '../../components/FileUpload/FileUpload'
import { useInput } from '../../hooks/useInput'
import axios from 'axios'
import { useRouter } from 'next/router'

const Create = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)
  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')
  const router = useRouter()

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prevState => prevState + 1)
    } else {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('text', text.value)
      formData.append('artist', text.value)
      formData.append('picture', picture)
      formData.append('audio', audio)
      axios.post('http://localhost:5000/tracks', formData)
        .then(() => router.push('/tracks'))
        .catch(e => console.log(e))
    }
  }
  const prev = () => setActiveStep(prev => prev - 1)


  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction='column' style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label="Название трека" {...name} />
            <TextField style={{ marginTop: 10 }} label="Имя исполнителя" {...artist} />
            <TextField style={{ marginTop: 10 }} label="Слова к треку" multiline rows={3} {...text} />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload  setFile={setPicture} accept='image/*'>
            <Button>Загрузите обложку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept='audio/*'>
            <Button>Загрузите аудио</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={prev}>Назад</Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  )
}

export default Create
