import React from 'react';
import { makeStyles, fade, } from '@material-ui/core/styles';
import { Typography,  AppBar, Toolbar } from '@material-ui/core';
// import InputBase from '@material-ui/core/InputBase';

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
	}

});


const Navbar = (props) => {
	const classes = useStyles();

	return (
	  <AppBar style={{
			backdropFilter: "blur(20px) saturate(200%)",
			boxShadow: "0 0 20px rgba(0,0,0,.04)",
			background: 'rgba(250,251,255,.01)',
			}}>
			<Toolbar>
				<Typography  style={{flexGrow:12, color:'black'}}  width='50px'height='50px' >
				The Shoppies  
				</Typography>
				<Typography  height='50px'  >
					<div className={classes.search}>
		
					</div>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;