import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles=makeStyles((theme)=>({

footerWrapper:{
    backgroundColor:"black",
    
    marginTop:"100px",
    color:"white",
    clear: "both",
    position: "relative",
    width:"100%",
    paddingBottom:"20px"

},

linkdesign:{
    display:"block",
    textDecoration:"none",
    color:"grey",
    fontSize:"20px",
    padding:"5px 0px"
}

}))
function Footer() {

    const classes=useStyles();
    return (
        <div className={classes.footerWrapper}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={4} sm={4} xs={6}>
                        <Typography style={{margin:"20px 0px"}}>SOLUTIONS</Typography>
                          <Link to="/home" className={classes.linkdesign}>Learnon skills</Link>
                          <Link className={classes.linkdesign}>Learnon Flow</Link>
                          <Link className={classes.linkdesign}>Goverment</Link>
                          <Link className={classes.linkdesign}>View pricing</Link>
                          <Link className={classes.linkdesign}>Skills up for free</Link>
                        
                    </Grid>

                    

                    <Grid item md={4} sm={4} xs={6}>
                        <Typography style={{margin:"20px 0px"}}>Company</Typography>
                          <Link to="/about" className={classes.linkdesign}>About us</Link>
                          <Link className={classes.linkdesign}>Customer stories</Link>
                          <Link className={classes.linkdesign}>Career</Link>
                          <Link className={classes.linkdesign}>Blog</Link>
                          <Link className={classes.linkdesign}>Resource center</Link>
                        
                    </Grid>

                    <Grid item md={4} sm={4} xs={6}>
                        <Typography style={{margin:"20px 0px"}}>Contact us</Typography>
                          <Typography>Head office</Typography>
                          <Typography variant="subtitle1">
                              <li>Rahat plaza (5th Floor) House#9,<br/>Road#5, Dhanmondi, Dhaka-1205</li>
                          </Typography>

                          <Typography style={{marginTop:"20px"}}>Mobile number</Typography>
                          <Typography variant="subtitle1">
                              <li>01857193408</li>
                              <li>01857193409</li>
                              <li>01957193410</li>
                          </Typography>
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer
