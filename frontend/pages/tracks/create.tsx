import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import StepWrapper from '../../components/StepWrapper/StepWrapper'
import { Button, Grid, TextField } from '@material-ui/core'

const Create = () => {
  const [activeStep, setActiveStep] = useState(0)

  const next = () => setActiveStep(prev => prev + 1)
  const prev = () => setActiveStep(prev => prev - 1)


  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction='column' style{{padding : 20}}>
            <TextField style={{marginTop: 10}} label="Название трека"/>
            <TextField style={{marginTop: 10}} label="Имя исполнителя"/>
            <TextField style={{marginTop: 10}} label="Слова к треку" multiline rows={3}/>
          </Grid>
        )}
      </StepWrapper>
      <Grid justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={prev}>
          Назад
        </Button>
        <Button disabled={activeStep === 2} onClick={next}>
          Далее
        </Button>
      </Grid>
    </MainLayout>
  )
}

export default Create
