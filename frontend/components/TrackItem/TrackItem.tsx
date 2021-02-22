import React from 'react'
import { ITrack } from '../../types/track'
import { Card } from '@material-ui/core'

interface TrackItemProps {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <Card>
      {track.name}
    </Card>
  )
}

export default TrackItem
