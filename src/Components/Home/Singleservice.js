import React from 'react'
import {makeStyles} from '@material-ui/core/'
import {Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button,Grid} from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles=makeStyles((theme)=>({

cardbottom:{
    display:"flex",
    justifyContent:"space-between",
    borderTop:"1px solid #CFD8DC"
},

coursetitle:{
  textShadow:"1px 2px #cfd8dc",
  
},
borderstyle:{
    border:"3px solid #29b6f6",
    marginBottom:"10px",
    width:"30px"
},
calendartime:{
    display:"flex",
    alignItems:"center"
},
calendaricon:{
    fontSize:"15px",
    marginRight:"10px"
}

}))
function Singleservice(props) {
   
    const {name,img,calendar,duration,price}=props.coursedata
    const classes=useStyles();
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
              
            
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={img}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.coursetitle}>
                  {name}
                </Typography>
                <Typography className={classes.borderstyle}></Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.calendartime}>
                    <CalendarTodayIcon className={classes.calendaricon}/> <Typography>{calendar}</Typography>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.calendartime}>
                    <AccessTimeIcon className={classes.calendaricon}/> <Typography>{duration}</Typography>
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardbottom}>
                <Button size="small" color="primary">
                  Tk. {price}
                </Button>
                <Button size="small" color="primary">
                  Enroll Now
                </Button>
            </CardActions>
            </Card>
        
           </Grid>
        </>
    )
}

export default Singleservice
