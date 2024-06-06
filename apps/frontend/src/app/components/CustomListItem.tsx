import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  body: string;
}

// eslint-disable-next-line react/function-component-definition
export const CustomListItem: React.FC<Props> = ({ title, body }) => {
  return (
    <ListItem disablePadding sx={{ px: '16px' }}>
      <ListItemIcon>
        <CheckCircleIcon sx={{ color: 'success.main' }} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography variant='body1' sx={{ color: 'text.secondary' }}>
            {title}
          </Typography>
        }
        secondary={
          <Typography variant='body1' sx={{ color: 'primary.contrastText' }}>
            {body}
          </Typography>
        }
      />
    </ListItem>
  );
};
