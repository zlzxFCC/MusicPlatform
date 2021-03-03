import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Container } from '@material-ui/core'
import Player from '../components/Player/Player'
import Head from 'next/head'

interface MainLayoutProps {
  title?: string
  description?: string
  keywords?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children,title,description,keywords }) => {
  return (
    <>
      <Head>
        <title>{title || "Музыкальная площадка"}</title>
        <meta name='description' content={'Музыкальная площадка.Для прослушки треков' + description}/>
        <meta name='robots' content="index follow"/>
        <meta name='keywords' content={keywords|| 'Музыка, Треки, Артисты'}/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <NavBar />
      <Container maxWidth='xl' style={{ margin: '90px 0' }}>
        {children}
      </Container>
      <Player />
    </>
  )
}

export default MainLayout
