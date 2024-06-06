import StarIcon from '@mui/icons-material/Star';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';
import { theme } from '../../theme.tsx';
import { CustomListItem } from '../CustomListItem.tsx';
import { ItemCard } from '../ItemCard.tsx';
import LinearWithValueLabel from '../LinearWithValueLable.tsx';

// eslint-disable-next-line react/function-component-definition
export const SupportUs: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [contributors, setContributors] = useState([
    { name: 'Jay Shah', contribution: 'Donated $500' },
    { name: 'Nitish Kumar', contribution: 'Donated $300' },
    { name: 'Chandrababu Naidu', contribution: 'Donated $200' },
  ]);

  const [recent, setRecent] = useState({
    name: 'Chirag Paswan',
    value: '$100',
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: '32px !important', bgcolor: 'primary.main' }}>
        <Container>
          <Grid container spacing={8}>
            <Grid xs={8}>
              <Box
                sx={{
                  p: '24px',
                  bgcolor: 'primary.dark',
                  color: 'text.secondary',
                  borderRadius: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                  }}
                >
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <Typography component='h3' variant='h3' letterSpacing='4px'>
                      Support Us
                    </Typography>
                    <VolunteerActivismIcon
                      sx={{
                        fontSize: '32px',
                        color: 'success.main',
                      }}
                    />
                  </Box>
                  <Box
                    component='hr'
                    sx={{
                      width: '100%',
                      height: '2px',
                      border: 'none',
                      borderRadius: '50px',
                      bgcolor: 'white',
                    }}
                  />
                </Box>
                <Typography
                  mt='8px'
                  ml='16px'
                  sx={{ color: 'primary.contrastText' }}
                  component='p'
                  variant='body1'
                >
                  Welcome to the VGEC Rocketry Team's support page! We are a
                  dedicated group of students from Vishwakarma Government
                  Engineering College, united by our passion for rocketry and
                  aerospace engineering. Our mission is to design, build, and
                  launch rockets that push the boundaries of student-led
                  innovation and engineering.
                </Typography>
                <Typography
                  gutterBottom
                  mt='24px'
                  variant='h4'
                  letterSpacing='3px'
                >
                  Why Support Us?
                </Typography>
                <Typography
                  ml='16px'
                  sx={{ color: 'primary.contrastText' }}
                  component='p'
                  variant='body1'
                >
                  Your support is crucial for the success of our team. It allows
                  us to:
                </Typography>
                <List
                  disablePadding
                  sx={{ py: '8px', color: 'primary.contrastText' }}
                >
                  <CustomListItem
                    body='Innovate and experiment with new materials, propulsion systems, and avionics.'
                    title='Develop Cutting-Edge Technology:'
                  />
                  <CustomListItem
                    body='Represent our college in national and international rocketry competitions.'
                    title='Participate in Competitions:'
                  />
                  <CustomListItem
                    body='Inspire the next generation of engineers through workshops, demonstrations, and community events.'
                    title='Educational Outreach:'
                  />
                  <CustomListItem
                    body='Ensure all our projects adhere to the highest safety standards and regulatory requirements.'
                    title='Safety and Compliance:'
                  />
                </List>
                <Typography
                  gutterBottom
                  mt='16px'
                  component='h4'
                  variant='h4'
                  letterSpacing='3px'
                >
                  How You Can Help?
                </Typography>
                <Grid container spacing={6} flexDirection='column'>
                  <Grid xs={10}>
                    <ItemCard
                      title='Monetary Donations'
                      body='Your financial contributions help us cover the costs of materials, tools, travel, competition fees, and other expenses. Every donation, big or small, makes a difference!'
                      list={[
                        'One-Time Donation: A single contribution to support our current projects and immediate needs.',
                        'Monthly Donation: Regular support to help us plan and execute long-term projects with confidence.',
                      ]}
                    />
                  </Grid>
                  <Grid xs={10} sx={{ alignSelf: 'flex-end' }}>
                    <ItemCard
                      title='In-Kind Donations'
                      body='We also appreciate in-kind donations such as:'
                      list={[
                        'Rocketry materials (composites, propulsion systems, etc.)',
                        'Electronic components and sensors',
                        'Tools and manufacturing equipment',
                        'Software licenses for design and simulation',
                      ]}
                    />
                  </Grid>
                  <Grid xs={10}>
                    <ItemCard
                      title='Sponsorship Opportunities'
                      body='Partner with us through sponsorships! We offer various sponsorship packages that include:'
                      list={[
                        'Branding on our rockets and team uniforms',
                        'Recognition on our website and social media channels',
                        'Invitations to exclusive events and launches',
                        'Opportunities to engage with our team for educational and promotional activities',
                      ]}
                    />
                  </Grid>
                </Grid>
                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    mt='24px'
                    component='p'
                    variant='h4'
                    letterSpacing='2px'
                    width='fit-content'
                  >
                    Thank you for supporting us.
                  </Typography>
                </Container>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  position: 'fixed',
                  height: 'fit-content',
                  color: 'text.secondary',
                }}
              >
                <Box
                  sx={{
                    p: '24px',
                    bgcolor: 'primary.dark',
                    borderRadius: '8px',
                  }}
                >
                  <Typography component='h5' variant='h5' gutterBottom>
                    Donate Now
                  </Typography>
                  <Typography
                    component='p'
                    variant='body1'
                    sx={{ color: 'primary.contrastText' }}
                  >
                    Your generosity can help us reach new heights.
                  </Typography>
                  <Typography mt='16px' component='p' variant='body2'>
                    Monthly Target
                  </Typography>
                  <LinearWithValueLabel progress={70} />
                  <Button
                    sx={{
                      mt: '16px',
                      p: '12px',
                      bgcolor: loading
                        ? 'primary.contrastText'
                        : 'success.main',
                      width: '100%',
                      '&:hover': {
                        bgcolor: loading
                          ? 'primary.contrastText'
                          : 'background.default',
                      },
                    }}
                  >
                    {loading ? (
                      <CircularProgress
                        size='24px'
                        sx={{
                          color: 'text.secondary',
                        }}
                      />
                    ) : (
                      <Typography
                        variant='body1'
                        sx={{ color: 'white', fontWeight: '500' }}
                        letterSpacing='2px'
                      >
                        Donate Now
                      </Typography>
                    )}
                  </Button>
                </Box>
                <Box
                  sx={{
                    p: '24px',
                    bgcolor: 'primary.dark',
                    borderRadius: '8px',
                  }}
                >
                  <Typography component='h5' variant='h5' gutterBottom>
                    Our Top Contributors
                  </Typography>
                  <List disablePadding>
                    {contributors.map((contributor, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemIcon>
                          <StarIcon sx={{ color: 'success.main' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant='body2'>
                              {contributor.name}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant='body2'
                              sx={{ color: 'primary.contrastText' }}
                            >
                              {contributor.contribution}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box
                  sx={{
                    p: '24px',
                    bgcolor: 'primary.dark',
                    borderRadius: '8px',
                  }}
                >
                  <Typography component='h5' variant='h5' gutterBottom>
                    Recent Contributions
                  </Typography>
                  <Typography
                    component='div'
                    variant='body1'
                    sx={{
                      ml: '8px',
                      color: 'primary.contrastText',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical',
                      maxWidth: '300px',
                    }}
                  >
                    {`${recent.value} donated by ${recent.name}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
