import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  header: {
    fontSize: '14px',

  },
  
  container: {
    width: '100vh',
    borderRadius: '14px',
    background: 'F4F4F4'

  }
})

const Descriptionm = () => {
  return (
    <div>

      <h1> 
        Exercise Instruction 
      </h1>
      <p>
        Be sure to keep your shoulder to behind you versus palyin
      </p>
    </div>
  )
}