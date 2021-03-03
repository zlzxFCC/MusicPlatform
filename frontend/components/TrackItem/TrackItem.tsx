import React from 'react'
import { ITrack } from '../../types/track'
import { Card, Grid, IconButton } from '@material-ui/core'
import styles from '../../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useActions } from '../../hooks/useActions'

interface TrackItemProps {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter()
  const { playTrack, pauseTrack, setActiveTrack } = useActions()

  const playHandler = (e) => {
    e.stopPropagation()
    setActiveTrack(track)
    playTrack()
  }

  return (
    <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={playHandler}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={'http://localhost:5000/' + track.picture} alt='Picture' />
      <Grid container direction='column' className={styles.trackContainer}>
        <div>{track.name}</div>
        <div className={styles.artist}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton style={{ marginLeft: 'auto' }} onClick={e => e.stopPropagation()}>
        <Delete />
      </IconButton>
    </Card>
  )
}

export default TrackItem
