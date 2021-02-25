import React from 'react'
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons'
import { Grid, IconButton } from '@material-ui/core'
import styles from '../../styles/Player.module.scss'
import { ITrack } from '../../types/track'
import TrackProgress from '../TrackProgress/TrackProgress'

const Player = () => {
  const active = false
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

  return (
    <div className={styles.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction='column' style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div className={styles.artist}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  )
}

export default Player
