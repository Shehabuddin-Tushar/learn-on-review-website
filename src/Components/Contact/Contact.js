import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((theme)=>({
    title:{
    
    },
    titleborder:{
          borderBottom:"3px solid #2196F3",
          width:"60px",
          marginBottom:"30px"

    },
    textinput:{
         width:"60%",
         marginBottom:"20px",
         [theme.breakpoints.down('sm')]: {
            width:"90%"
            
           }
    },

    btn:{
        display:"block",
        width:"200px",
        backgroundColor:"#2196F3",
        color:"white",
        '&:hover': {
            backgroundColor: '#0069d9',
            
          },
    }
}))
function Contact() {

    const classes=useStyles()
    return (
        <>
        <Grid>
            <Grid item xs={12} style={{paddingTop:"55px"}}>
                 <iframe width="100%" height="450px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14612.66699208635!2d90.45475237842558!3d23.70573865099736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b77186e2e3f9%3A0x1e98ee292b8b578b!2z4Kau4Ka-4Kak4KeB4Kav4Ka84Ka-4KaH4Kay!5e0!3m2!1sbn!2sbd!4v1633338204812!5m2!1sbn!2sbd"></iframe>
            </Grid>
            
        </Grid>
         <Container>
            <Grid>
                <Grid item xs={12} style={{paddingTop:"60px"}}>
                  <Typography variant="h4" paragraph className={classes.title}>Contact us</Typography>
                  <Typography className={classes.titleborder}></Typography>
                  <TextField id="filled-search" label="Enter your name" type="search" variant="outlined" className={classes.textinput} />

                  <TextField id="filled-search" label="Enter your email" type="search" variant="outlined" className={classes.textinput} />

                  <TextField id="filled-search" label="Enter your website url" type="search" variant="outlined" className={classes.textinput} />

                  <TextField id="filled-search" label="Message" type="search" variant="outlined"multiline rows={6} className={classes.textinput} />

                  <Button variant="contained" size="large" className={classes.btn}>Send</Button>
                </Grid>
            
            </Grid>    
         </Container>
         </>
    )
}

export default Contact
