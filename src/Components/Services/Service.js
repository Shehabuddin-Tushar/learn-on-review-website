import React,{useState,useEffect} from 'react'
import { Box, Button, Container, Grid,Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Singleservice from '../Home/Singleservice';
import { Link } from 'react-router-dom';
const useStyles=makeStyles((theme)=>({
  serviceroot:{
      paddingTop:theme.spacing(7)
  },
  servicebanner:{
      background:`url("https://i.postimg.cc/Rhx7jTyy/corporate.jpg")`,
      backgroundSize:"100% 100%",
      height:"450px",
      objectFit: "cover"
   
  } ,
  bannertext:{
    backgroundColor:"rgba(207,216,220,0.5)",
    width:"75%",
    paddingTop:"50px",
    paddingLeft:"50px",
    height:"89%",
    textAlign:"center",
    margin:"0 auto"
  },
  firsttext:{
      fontWeight:"bold",
      width:"40%",
      margin:"0 auto",
      textAlign:"center",
      color:"#2196F3",
      textShadow:"1px 2px grey",
      [theme.breakpoints.down('sm')]: {
       fontSize:"25px",
       width:"90%"
        
       }

  },

  secondtext:{
    fontWeight:"bold",
    width:"40%",
    margin:"10px auto",
    textAlign:"center",
    color:"white",
    [theme.breakpoints.down('sm')]: {
       
        width:"90%"
         
        }

  },
  horizontalborder:{
    border:"3px solid #64B5F6",
    
    width:"10%",
    margin:"30px auto",
},
  containe:{
    paddingTop:theme.spacing(5)
  },

  

 

}));
function Service() {
   const classes=useStyles();
   const [courses,setCourses]=useState([]);

   useEffect(()=>{

     fetch("./data.json").then(res=>res.json()).then(data=>setCourses(data))

   })
    return (
    <div className={classes.serviceroot}>
         <Box className={classes.servicebanner}>
           <div className={classes.bannertext}>
              <Typography><Link to="/services" style={{textDecoration:"none"}}>Services</Link> / Customer experiance</Typography>
              <Typography variant="h4" className={classes.firsttext}>Measuring social media impact in an exponential world</Typography>  
              <Typography className={classes.horizontalborder}></Typography>
              <Typography variant="body2" gutterBottom paragraph className={classes.secondtext}>Already outsourced your IT to another company and completely frustrated with their results? Do they reply same-day to your employees’ IT requests? Do they 
               you with reporting and long-term planning for your IT environment? If the answer is No – consider Learnon!</Typography>
              <Button style={{fontSize:"30px",color:"blue" ,fontWeight:"bold"}}>Tk. 6000</Button>
          </div>
        </Box>
    <Container className={classes.containe}>
      <Grid  container spacing={2}>
        {
          courses.map((course)=><Singleservice key={course.id} coursedata={course}/>)
        }
        
        
      </Grid>
      </Container>
    </div>
    )
}

export default Service
