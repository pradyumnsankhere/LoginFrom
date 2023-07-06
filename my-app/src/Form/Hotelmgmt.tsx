import React, { Component } from "react";
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
  Grid,
} from "@material-ui/core";

const styles = createStyles({
  mainbox: {
    marginTop: "50px",
    width: "100%",
    height: "700px",
    // background: "rgba(211, 211, 211, 0.4)",
    background:'#F7F9FA',
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  avatar: {
    backgroundColor: "#0076CE",
    color: "#fff",
    fontWeight: "bold",
    marginRight: "8px",
     
  },
  skillButton: {
    margin: "5px",
    color: "white",
    background: "#004170",
  },
  spanClass: {
    marginLeft: "100px",
  },
  fontTypo: {
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "sans-serif",
  },
  protime: {
    fontWeight: "bold",
  },
  hrline:{
    // background:'#E4E5E6' ,
     
  },
  boxclas: {},
});

interface HotelmgmtProps extends WithStyles<typeof styles> {}
const skills = ["PHP", "SQL", "Android", "Reactjs", "ROR"];

class Hotelmgmt extends Component<HotelmgmtProps> {
  state = {
    showAll: false,
  };

  handleShowAll = () => {
    this.setState({ showAll: true });
  };
  render() {
    const { classes } = this.props;
    const number = 1;
    const number2 = 2;
    const number3 = 3;
    const { showAll } = this.state;
    const visibleSkills = showAll ? skills : skills.slice(0, 3);

    return (
      <Container maxWidth="md" className={classes.mainbox}>
        <Box className={classes.boxclas}>
          <Typography className={classes.fontTypo} variant="h6">
            Hotel Management System
          </Typography>
          <Typography variant="body1">Hourly-public</Typography>
          <hr className={classes.hrline} ></hr>
        </Box>
             
        <Box>
          <Typography className={classes.fontTypo} variant="h6">
            Project Description
          </Typography>
          <Typography style={{ overflow: "auto", height: "200px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt
            eligendi magnam eaque laboriosam, quisquam fugiat qui, earum
            pariatur ducimus mollitia at voluptates quidem laudantium quia ab
            voluptatum laborum esse perspiciatis harum consequatur officia
            veritatis aliquid? Itaque eligendi, architecto perferendis molestiae
            rerum, quae porro modi voluptatibus veniam possimus deserunt
            exercitationem quia. Quibusdam sunt aliquid temporibus impedit
            beatae eius iusto. Ad icia delectus quibusdam tempora veniam vel
            consequuntur, quia nobis necessitatibus ad enim! Fugit natus laborum
            quas eum velit harum repellendus iste aliquam illum qui mollitia
            officiis quisquam ad, ipsum itaque! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident ex quisquam debitis esse
            autem saepe quod architecto ad atque tempora vitae dolorem voluptate
            tempore repudiandae veniam quas impedit, natus odit. Sit voluptatem
            velit maxime officia mollitia expedita, eum corrupti et maiores
            dolorem eos atque quod, sunt rerum nisi blanditiis dicta saepe ab
            laborum debitis tenetur aliquam ipsa qui. Excepturi ipsam doloribus
            dolores numquam ipsum reiciendis alias distinctio corporis, totam
            dolorem, quos maxime itaque sapiente non. Iusto iste saepe et illo
            quod voluptates fugiat assumenda facere incidunt nulla nobis vel
            dolorem velit, quo earum magni amet sed laudantium. Pariatur,
            impedit ut.
          </Typography>
          <hr></hr>
        </Box>
  <Box>         <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.fontTypo} variant="h6">
              Project Time:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Badge color="secondary">
              <Avatar className={classes.avatar}>{number}</Avatar>
              <div>
                <Typography className={classes.protime}>
                  less than 30hrs/week
                </Typography>
                <Typography>Hourly</Typography>
              </div>
            </Badge>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Badge color="secondary">
              <Avatar className={classes.avatar}>{number2}</Avatar>
              <div>
                <Typography className={classes.protime}>
                  1 to 3 months
                </Typography>
                <Typography>project length</Typography>
              </div>
            </Badge>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Badge color="secondary">
              <Avatar className={classes.avatar}>{number3}</Avatar>
              <div>
                <Typography className={classes.protime}>
                  Intermediate
                </Typography>
                <Typography>
                  I am looking for mix experience and value
                </Typography>
              </div>
            </Badge>
          </Grid>
         
        </Grid>
        <hr></hr>
        </Box>

        
        <Box>
          <Typography className={classes.fontTypo} variant="h6">
            Activity on this job:
          </Typography>
          <Typography variant="body1">
            Proposals: <span className={classes.spanClass}>10 to 15</span>
          </Typography>
          <Typography variant="body1">
            Last viewed by the client:<span> 10 minutes ago </span>
          </Typography>
          <Typography variant="body1">
            Invites sent:<span className={classes.spanClass}> 0</span>
          </Typography>
          <Typography variant="body1">
            Unanswered invites:<span className={classes.spanClass}>0</span>
          </Typography>
          <hr></hr>
        </Box>

        <Box>
          <Typography className={classes.fontTypo} variant="h6">
            Skills and expertise:
          </Typography>
          {visibleSkills.map((skill, index) => (
            <Button
              key={index}
              className={classes.skillButton}
              variant="contained"
            >
              {skill}
            </Button>
          ))}
          {!showAll && skills.length > 3 && (
            <Button onClick={this.handleShowAll}>+2</Button>
          )}
        </Box>
      </Container>
    );
  }
}
export default withStyles(styles)(Hotelmgmt);
