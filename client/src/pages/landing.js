import { makeStyles } from '@material-ui/core/styles';
import Image from '../assets/landing-page.jpg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Logo from '../assets/fitform logo.svg';
import LogoWhite from '../assets/logo_white.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Background: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },

  navbarLogo: {
    width: '110px',
    paddingRight: '10px',
  },

  navbar: {
    background: 'rgba(204, 204, 204, 0)',
    position: 'fixed',
  },

  logo: {
    height: '100px',
    width: '200px',
    alignContents: 'right',
    paddingLeft: '140px',
    paddingTop: '45px',
  },

  name: {
    color: 'white',
    paddingTop: '45px',
    transition: theme.transitions.create(['border-color', 'color', 'opacity'], {
      duration: theme.transitions.duration.complex,
    }),
  },

  tagline: {
    color: 'white',
    paddingLeft: '140px',
    fontSize: '55px',
    fontWeight: 'bold',
    [theme.breakpoints.up('xs')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '40px',
    },
  },

  getStarted: {
    backgroundColor: '#DE4922',
    color: '#FFFFFF',
    marginTop: '50px',
    marginLeft: '120px',
    width: '200px',
    height: '50px',
    fontWeight: '500',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: 'rgb(245, 122, 90, 1)',
    },
  },

  login: {
    marginTop: '50px',
    marginLeft: '20px',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
}));

function Landing() {
  const classes = useStyles();
  const theme = useTheme();
  const minimizeText = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.Background}>
      <AppBar position='static'>
        <Toolbar variant='dense' className={classes.navbar}>
          <img src={LogoWhite} className={classes.navbarLogo} alt='logo-1' />
          {/* <Typography variant='h6' color='primary'>
            Fitform
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} direction='column'>
        <Grid item xs={12}>
          <Typography variant='h6' color='inherit'></Typography>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid container spacing={2} direction='row'>
          <Grid item>
            <img src={LogoWhite} className={classes.logo} alt='logo-2' />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {minimizeText && (
            <p className={classes.tagline}>
              {' '}
              A personalized coach right in the comfort of your home{' '}
            </p>
          )}
          <Button
            variant='contained'
            className={classes.getStarted}
            onClick={() => (window.location.href = '/exercise')}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
