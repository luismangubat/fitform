import Navbar from '../components/navbar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	
	Background: {
		backgroundColor: '#0C0C0C',
    position: 'relative'
  },

  logo: {
    color: 'white',
    height: '100px',
    paddingTop: '100px',
    paddingLeft: '100px',
    backgroundColor: 'black'

  }
});

function Landing() {

  const classes = useStyles();
  return (
    <div className={classes.Background}>
      <Navbar/>
      <h1 className={classes.logo}>Fitform</h1>
      <p className={classes.tagLine}>A powerful analytics tool to help entrepreneurs collect<br/> competitor analysis for their products.</p>
    </div>
  );
}

export default Landing;
