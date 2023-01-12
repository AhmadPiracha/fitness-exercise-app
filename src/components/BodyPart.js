import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
 
   
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item ?
        {
          borderTop: '4px solid #FF2625',
          background: '#FFF',
          borderBottomLeftRadius: '20px',
          width: '150px',
          height: '160px',
          cursor: 'pointer',
          gap: '20px'
        }
        :
        {
          background: '#FFF',
          borderBottomLeftRadius: '20px',
          width: '150px',
          height: '160px',
          cursor: 'pointer',
          gap: '20px'
        }
    }
  onClick={() => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '35px', height: '40px' }} />
    <Typography fontSize="20px" fontWeight="bold" fontFamily="Roboto"
     color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;