// ProfileDisplay.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SimpleIconsHackthebox } from './SimpleIconsHackthebox'; // Import your icon component

const ProfileDisplay = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tryhackme.com/badge/2882328';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            {/* Profile Image */}
            <Grid item xs={12} sm={4} container justifyContent="center">
              <Avatar
                alt="Kiko"
                src="/img/blurredTears.jpg"
                sx={{ width: 120, height: 120 }}
              />
            </Grid>
            {/* Profile Details */}
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" color="text.secondary">
                Kikour
              </Typography>
              <Typography variant="body1" paragraph>
                Pentester / Cyber Specialist / Music Lover
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="https://github.com/kikoxx" target="_blank" rel="noopener noreferrer" color="inherit">
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem' }} />
                </Link>
                <Link href="https://app.hackthebox.com/profile/1697674" target="_blank" rel="noopener noreferrer" color="inherit">
                  <SimpleIconsHackthebox style={{ width: '2rem', height: '2rem' }} />
                </Link>
                <Link href="https://tryhackme.com/p/kikour" target="_blank" rel="noopener noreferrer" color="inherit">
                  <img src="https://tryhackme-badges.s3.amazonaws.com/kikour.png" alt="TryHackMe" style={{ fontSize: '2rem' }}/>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Box>
  );
};

export default ProfileDisplay;
