import React from "react";
import {
  Box,
  Container,
  Typography,
  createStyles,
  withStyles,
  WithStyles,
  Badge,
  Avatar,
  Button,
} from "@material-ui/core";

const styles = createStyles({
  mainbox: {
    marginTop: "50px",
    width: "100%",
    height: "700px",
    
    background: 'rgba(211, 211, 211, 0.4)',
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  avatar: {
    backgroundColor: "#3f51b5",
    color: "#fff",
    fontWeight: "bold",
    marginRight: "3px",
    
  },
  skillButton: {
    margin: "5px",
    color: "white",
    background: "#3f51b5",
    
  },
  spanClass:{
margin:'50px',     

  },

  fontTypo:{
    fontWeight: 'bold',
    fontSize:'20px',
       fontFamily:'sans-serif',
  },
  boxclas:{
     
  }
  
});

interface HotelmgmtProps extends WithStyles<typeof styles> {}

const Hotelmgmt: React.FC<HotelmgmtProps> = ({ classes }) => {
  const number = 1;
  const number2 = 2;
  const number3 = 3;

  return (
    <Container maxWidth="md" className={classes.mainbox}>
      <Box   className={classes.boxclas}>
        <Typography  className={classes.fontTypo} variant="h6">Hotel Management System</Typography>
        <Typography variant="body1">Hourly-public</Typography>
      </Box>

      <Box>
        <Typography className={classes.fontTypo} variant="h6">Project Description</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt
          eligendi magnam eaque laboriosam, quisquam fugiat qui, earum pariatur
          ducimus mollitia at voluptates quidem laudantium quia ab voluptatum
          laborum esse perspiciatis harum consequatur officia veritatis aliquid?
          Itaque eligendi, architecto perferendis molestiae rerum, quae porro
          modi voluptatibus veniam possimus deserunt exercitationem quia.
          Quibusdam sunt aliquid temporibus impedit beatae eius iusto. Ad
          cupiditate harum dolorem laudantium perferendis blanditiis quis enim
          vel voluptatibus error fuga ipsa amet iste suscipit, aliquid veniam
          magni perspiciatis nihil quo atque praesentium, quos officia! Ipsa,
          facilis laudantium pariatur ut minima adipisci totam! Et aut deleniti
          repudiandae neque tempore!
        </Typography>
      </Box>

      <Box >
        <Typography className={classes.fontTypo} variant="h6">Project Time:</Typography>
        <Badge color="secondary"  style={{margin:'10px'}}>
          <Avatar className={classes.avatar}>{number}</Avatar>
          less than 30hrs/week <br></br>
         Hourly    
        </Badge>
        <Badge color="secondary" >
          <Avatar className={classes.avatar} style={{ marginLeft:'30px'}}>{number2}</Avatar>1 to 3 months
          <br ></br>
      project lenght
        </Badge>
        <Badge color="secondary">
          <Avatar className={classes.avatar} style={{ marginLeft:'30px'}}>{number3}</Avatar>
          Intermediate <br></br>I am looking for mix experience and value{" "}
        </Badge>
      </Box>

      <Box>
        <Typography className={classes.fontTypo} variant="h6">Activity on this job:  </Typography>
        <Typography variant="body1">Proposals: <span className={classes.spanClass}>10 to 15</span> </Typography>
        <Typography variant="body1">Last viewed by the client:<span  > 10 minutes ago </span></Typography>
        <Typography variant="body1">Invites sent:<span className={classes.spanClass}> 0</span  ></Typography>
        <Typography variant="body1">Unanswered invites:<span className={classes.spanClass}>0</span></Typography>
      </Box>

      <Box>
        <Typography className={classes.fontTypo} variant="h6">Skills and expertise:</Typography>
        <Button
          className={classes.skillButton}
          variant="contained"
          color="primary"
        >
          PHP
        </Button>
        <Button
          className={classes.skillButton}
          variant="contained"
          color="primary"
        >
          SQL
        </Button>
        <Button
          className={classes.skillButton}
          variant="contained"
          color="primary"
        >
          Android
        </Button>
      </Box>
    </Container>
  );
};

export default withStyles(styles)(Hotelmgmt);
