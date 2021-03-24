import { makeStyles } from '@material-ui/core/styles';
import Image from '../assets/landing-page.jpg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Logo from '../assets/fitform logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
	
	Background: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    width: "100%",
    height: "100%",
  },

  navbarLogo: {
    width: "30px",
    paddingRight: "10px",
  },

  navbar: {
    backgroundColor: "black",
  },

  logo: {
    height: "75px",
    width: "50px",
    alignContents: "right",
    paddingLeft: "140px",
    paddingTop: "45px"
  }, 

  name: {
    color: 'white',
    paddingTop: "45px",  
  }, 

  tagline: {
    color: 'white',
    paddingLeft: "140px",
    fontSize: "20px", 
    fontWeight: "bold",
  },

  getStarted: {
    backgroundColor: "#DE4922",
    color: "#FFFFFF",
    marginTop: "50px",
    marginLeft: "120px",
  },

  login: {
    marginTop: "50px",
    marginLeft: "20px",
    color: "#FFFFFF",
    fontWeight: "bold",
  }
});

function Landing() {

  const classes = useStyles();
  return (
    <div className={classes.Background}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.navbar}>
          <img src={Logo} className={classes.navbarLogo}></img>
          <Typography variant="h6" color='primary'>
            Fitform
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} direction="column">
      <Grid item xs={12}>
        <Typography variant="h6" color="inherit">
       
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
        <Grid container spacing={2} direction="row">
          <Grid item>
            <img src={Logo} className={classes.logo}></img>
          </Grid>
          <Grid item>
            <h1 className={classes.name}>Fitform</h1>
          </Grid>
        </Grid>
        <Grid item xs={6}>
        <p className={classes.tagline}>A personalized coach right in the comfort of your home</p>
        <Button variant="contained" className={classes.getStarted}>Get Started</Button>
        <Button className={classes.login}>Log In</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
