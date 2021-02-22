import React from 'react'
import { ITrack } from '../../types/track'
import { Card, Grid, IconButton } from '@material-ui/core'
import styles from '../../styles/TrackItem.module.scss'
import { Pause, PlayArrow } from '@material-ui/icons'

interface TrackItemProps {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <Card className={styles.track}>
      <IconButton>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={track.picture} alt='Picture' />
      <Grid container direction='column' className={styles.trackContainer}>
        <div>{track.name}</div>
        <div className={styles.artist}>{track.artist}</div>
      </Grid>
    </Card>
  )
}

export default TrackItem
