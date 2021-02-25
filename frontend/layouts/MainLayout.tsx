import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Container } from '@material-ui/core'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container maxWidth='xl' style={{margin : '90px 0'}}>
        {children}
      </Container>
    </>
  )
}

export default MainLayout
