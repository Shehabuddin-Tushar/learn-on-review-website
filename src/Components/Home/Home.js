import React,{useState,useEffect} from 'react'
import { Box, Button, Container, Grid,Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Singleservice from './Singleservice';
const useStyles=makeStyles((theme)=>({
  homeroot:{
      paddingTop:theme.spacing(8)
  },
  homebanner:{
      background:`url("https://i.postimg.cc/LsWdg2KD/dev-buzzwords-blog.jpg")`,
      backgroundSize:"100% 100%",
      height:"450px",
      objectFit: "cover"
   
  } ,
  bannertext:{
    width:"60%",
    paddingTop:"50px",
    paddingLeft:"50px",
    [theme.breakpoints.down('sm')]: {
       
      width:"80%"
       
      }
  },
  firsttext:{
      fontWeight:"bold",

  },
  secondtext:{
      fontWeight:"bold",
      color:"#2196F3",
      borderBottom:"5px solid #2196F3",
      width:"250px",
      paddingBottom:"10px"
  },
  containe:{
    paddingTop:theme.spacing(5)
  }
 

}));
function Home() {
   const classes=useStyles();
   const [courses,setCourses]=useState([]);

   useEffect(()=>{

     fetch("./data.json").then(res=>res.json()).then(data=>setCourses(data))

   })
    return (
    <div className={classes.homeroot}>
         <Box className={classes.homebanner}>
           <div className={classes.bannertext}>
              <Typography variant="h3" className={classes.firsttext}>Build a</Typography>  
              <Typography variant="h3" className={classes.secondtext} gutterBottom>Better you</Typography>
              <Typography variant="subtitle1" gutterBottom paragraph style={{fontWeight:"500"}}>Used to support both teaching
                  and learning, technology infuses classrooms with digital learning tools, such as computers and hand held devices;
                  expands course offerings, experiences, and learning materials; supports learning 24 hours a day, 7 days a week.</Typography>
              <Button color="primary" variant="contained" endIcon={<ArrowRightAltIcon/>}>Learn more</Button>
          </div>
        </Box>
    <Container className={classes.containe}>
      <Grid  container spacing={2}>
        {
          courses.slice(0,5).map((course)=><Singleservice key={course.id} coursedata={course}/>)
        }
        
        
      </Grid>
      </Container>
    </div>
    )
}

export default Home
