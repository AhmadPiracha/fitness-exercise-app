import React from 'react'
import { Box } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import { Stack } from '@mui/system';
const Features = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <Stack direction="row" 
    sx={{ gap: { lg: '50px', xs: '25px' } }} flexWrap="wrap" justifyContent="center">
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}

      </Box>

    ))}
  </Stack>
  )
}

export default Features