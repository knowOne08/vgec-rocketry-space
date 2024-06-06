import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number },
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant='determinate'
          sx={{
            '&.MuiLinearProgress-root': {
              borderRadius: '50px',
              backgroundColor: 'primary.contrastText',
            },
            '& .MuiLinearProgress-bar': {
              borderRadius: '50px',
              backgroundColor: 'success.main',
            },
          }}
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35, textAlign: 'end' }}>
        <Typography variant='body2'>{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel(props: { progress: number }) {
  return (
    <Box sx={{ width: '100%', my: '4px' }}>
      <LinearProgressWithLabel value={props.progress} />
    </Box>
  );
}
