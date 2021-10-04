import React from 'react'
import {makeStyles,alpha} from '@material-ui/core/styles'
import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import {  Search } from '@material-ui/icons';

const useStyles=makeStyles((theme)=>({
    toolbar:{

        display:"flex",
        justifyContent:"space-between",
        color:"white"
    
      },
    
    sitename:{
        color:"white",
        textDecoration:"none",
        
    },
   
    menuitem:{
        textDecoration:"none",
        color:"white",
        display:"inline-block",
        padding:"10px 15px",
        fontSize:"18px",
        fontWeight:"bold",
        [theme.breakpoints.down('sm')]: {
            fontSize:"14px",
            
           }
    },
    menuitemactive:{
      color:"#283593",
      textShadow:"1px 1px grey",
      borderBottom:"2px solid #283593"

    },

    search:{
        display:"flex",
        alignItems:"center",
        width:"30%",
        
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
            display:"none",
            
           }
       
    },

    input:{
      color:"white"
    }


}));
function Navbar() {
    const classes=useStyles();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" ><Link to="/" className={classes.sitename}>LearnOn</Link></Typography>
            
            
            <div className={classes.menubar}>
              <NavLink exact to="/home" className={classes.menuitem} activeClassName={classes.menuitemactive}>Home</NavLink>
              <NavLink exact to="/about" className={classes.menuitem} activeClassName={classes.menuitemactive}>About us</NavLink>
              <NavLink exact to="/services" className={classes.menuitem} activeClassName={classes.menuitemactive}>Services</NavLink>
              <NavLink exact to="/contact" className={classes.menuitem} activeClassName={classes.menuitemactive} >Contact us</NavLink>
           
          
            </div>

            <div className={classes.search}>
              <Search/>
              <InputBase placeholder="Find a course ........." className={classes.input}/>
            </div>

          </Toolbar>
        </AppBar>
    )
}

export default Navbar
