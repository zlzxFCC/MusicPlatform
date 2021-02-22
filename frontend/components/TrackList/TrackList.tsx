import React from 'react'
import { ITrack } from '../../types/track'
import { Box, Grid } from '@material-ui/core'
import TrackItem from '../TrackItem/TrackItem'

interface TrackListPros {
  tracks: ITrack[]
}

const TrackList: React.FC<TrackListPros> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map(track =>
          <TrackItem
            key={track._id}
            track={track}
          />
        )}
      </Box>
    </Grid>
  )
}

export default TrackList
