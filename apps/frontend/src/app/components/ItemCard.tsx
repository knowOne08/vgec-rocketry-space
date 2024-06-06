import { Box, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  body: string;
  list: string[];
}

// eslint-disable-next-line react/function-component-definition
export const ItemCard: React.FC<Props> = ({ title, body, list }) => {
  return (
    <Box
      sx={{
        p: '24px',
        bgcolor: 'primary.main',
        borderRadius: '8px',
      }}
    >
      <Typography component='h5' gutterBottom variant='h5' letterSpacing='2px'>
        {title}
      </Typography>
      <Box
        component='hr'
        sx={{
          width: '100%',
          height: '2px',
          border: 'none',
          borderRadius: '50px',
          bgcolor: 'primary.contrastText',
        }}
      />
      <Typography
        ml='16px'
        component='p'
        variant='body1'
        sx={{ color: 'primary.contrastText' }}
        gutterBottom
      >
        {body}
      </Typography>
      <Typography
        component='ul'
        variant='body1'
        sx={{ color: 'primary.contrastText' }}
      >
        {list &&
          list.length > 0 &&
          list.map((item, idx) => <li key={idx}>{item}</li>)}
      </Typography>
    </Box>
  );
};
