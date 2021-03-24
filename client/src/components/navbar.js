import React from 'react';
import { makeStyles, fade, } from '@material-ui/core/styles';
import { Typography,  AppBar, Toolbar, Button } from '@material-ui/core';
import Logo from '../assets/fitform logo.svg';

const useStyles = makeStyles({
	
	navbarContainer: {
		widows: '100vh',
		backgroundColor: 'black',
		backdropFilter: "blur(20px) saturate(200%)",
		boxShadow: "0 0 20px rgba(0,0,0,.04)",
		background: 'rgba(250,251,255,.01)',
		position: 'fixed',
		zIndex: '100',
		width: '100%'

	},
	
	navbarLogo: {
    width: "30px",
    paddingRight: "10px",
  },
	
  search: {
    position: 'relative',
		textAlign: 'right',
		width:"200px",
		backgroundColor: fade('#0C0C0C', 0.2),
		borderRadius: '15px',
    '&:hover': {
      backgroundColor: fade('#FFFFF', 0.2),
    },
    marginLeft: 0,

  },
  inputRoot: {
		color: 'white',
		borderRadius: '15px',
		backgroundColor: fade('#0C0C0C', 0.2),
		textAlign: 'center'
    
	},
	InputBase: {
		textAlign: 'center',
		paddingLeft: '70px'
	}, 

	Button: {
		textTransform: 'none',
		
	}

});


const Navbar = (props) => {
	const classes = useStyles();

	return (
	  <AppBar style={{
			backdropFilter: "blur(20px) saturate(200%)",
			boxShadow: "0 0 20px rgba(0,0,0,.04)",
			background: 'rgba(250,251,255,.01)',
			position: 'relative'
			}}>
			<Toolbar>
				<img src={Logo} className={classes.navbarLogo}></img>
				<Typography  style={{flexGrow:12, color: 'black'}}  width='50px'height='50px' >
					Fitform 
				</Typography>
				<Typography >
            <Button  className={classes.Button} onClick={() => window.location = '/workout'}> Workout </Button>
          </Typography>
          <Typography>
            <Button className={classes.Button}  onClick={() => window.location = '/exercise'} > Login </Button>
          </Typography>
          <Typography style={{paddingRight: '3%'}} >
            <Button  className={classes.Button}  onClick={() => window.location = '/Profile'}> Profile</Button>
          </Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;