import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Container } from '@material-ui/core'
import Player from '../components/Player/Player'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container maxWidth='xl' style={{ margin: '90px 0' }}>
        {children}
      </Container>
      <Player />
    </>
  )
}

export default MainLayout
