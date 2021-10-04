import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
const useStyles=makeStyles((theme)=>({
  notfound:{
      width:"80%",
      margin:"0 auto",
      paddingTop:"90px",
      height:"50vh",
      textAlign:"center",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
  },
  notfoundtext:{
    fontSize:"100px"
  },
  notfoundbtn:{
      textDecoration:"none",
      marginTop:"50px",
      fontSize:"30px",
      fontWeight:"bold",
      '&:hover': {
       color : '#0069d9',
        
      },

  }

}))
function Notfound() {
    const classes=useStyles()
    return (
        <div className={classes.notfound}>
           <Typography variant="h4" className={classes.notfoundtext}>404 not found</Typography>
           <Link to="/home" className={classes.notfoundbtn} >Go to home page</Link>
        </div>
    )
}

export default Notfound
