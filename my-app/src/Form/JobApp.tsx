import React, { ChangeEvent, FormEvent } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  withStyles,
  createStyles,
  InputAdornment,
  IconButton,
  Typography,
} from "@material-ui/core";

import { AttachFile } from "@material-ui/icons";

const styles = createStyles({
  formContainer: {
    margin: "0 auto",
    maxWidth: "400px",
    padding: "15px",
  },
});

interface JobApplicationState {
  email: string;
  firstName: string;
  lastName: string;
  cvFile: File | null;
  coverLetterFile: File | null;
  termsAccepted: boolean;
  isFormSubmitted: boolean;
}

class JobApp extends React.Component<any, JobApplicationState> {
  cvInputRef = React.createRef<HTMLInputElement>();
  coverLetterInputRef = React.createRef<HTMLInputElement>();

  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      cvFile: null,
      coverLetterFile: null,
      termsAccepted: false,
      isFormSubmitted: false,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleCVFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    this.setState({ cvFile: file });
  };

  handleCoverLetterFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    this.setState({ coverLetterFile: file });
  };

  handleTermsAcceptedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    this.setState({ termsAccepted: checked });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const {
      email,
      firstName,
      lastName,
      cvFile,
      coverLetterFile,
      termsAccepted,
    } = this.state;

    if (
      !email ||
      !firstName.trim() ||
      !lastName.trim() ||
      !cvFile ||
      !termsAccepted
    ) {
      this.setState({ isFormSubmitted: true });
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      this.setState({ isFormSubmitted: true });
      return;
    }

    console.log("Data", this.state);
    this.setState({
      email: "",
      firstName: "",
      lastName: "",
      cvFile: null,
      coverLetterFile: null,
      termsAccepted: false,
      isFormSubmitted: false,
    });
  };

  render() {
    const { email, firstName, lastName, termsAccepted, isFormSubmitted } =
      this.state;
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={classes.formContainer}>
        <div>
          <Typography style={{ marginTop: "15px" }}>Email Address</Typography>
          <TextField
            style={{ width: "100%", marginBottom: "5px", marginTop: "0px" }}
            name="email"
            label="Email Address"
            type="text"
            value={email}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            error={
              isFormSubmitted &&
              (email.trim().length === 0 || !email.match(/^\S+@\S+\.\S+$/))
            }
          />
        </div>
        <div>
          <Typography style={{ marginTop: "15px" }}>First Name*</Typography>
          <TextField
            style={{ width: "100%", marginBottom: "5px", marginTop: "0px" }}
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            error={isFormSubmitted && firstName.trim().length === 0}
          />
        </div>
        <div>
          <Typography style={{ marginTop: "15px" }}>Last Name*</Typography>

          <TextField
            style={{ width: "100%", marginBottom: "5px", marginTop: "0px" }}
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            error={isFormSubmitted && lastName.trim().length === 0}
          />
        </div>
        <div>
          <Typography style={{ marginTop: "15px" }}>Attach CV*</Typography>
          <TextField
            style={{ width: "100%", marginBottom: "5px" }}
            variant="outlined"
            type="text"
            placeholder="Drag here from desktop or simple click and attach"
            error={isFormSubmitted && lastName.trim().length === 0}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton component="span" style={{ color: "green" }}>
                    <AttachFile />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onClick={() => this.cvInputRef.current?.click()}
          />
          <input
            type="file"
            ref={this.cvInputRef}
            onChange={this.handleCVFileChange}
            style={{ display: "none" }}
            accept=".pdf,.doc,.docx, .txt"
          />
          <Typography style={{ color: "grey" }}>
            .pdf, .doc, .docx ,.rtf, txt.
          </Typography>
        </div>
        <div>
          <Typography style={{ marginTop: "15px" }}>
            Attach Cover Letter (if any)
          </Typography>
          <TextField
            style={{ width: "100%", marginBottom: "5px" }}
            variant="outlined"
            type="text"
            placeholder="Drag here from desktop or simple click and attach"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton component="span" style={{ color: "green" }}>
                    <AttachFile />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onClick={() => this.coverLetterInputRef.current?.click()} // Trigger click on file input
          />
          <input
            type="file"
            ref={this.coverLetterInputRef}
            onChange={this.handleCoverLetterFileChange}
            style={{ display: "none" }}
            accept=".pdf,.doc,.docx, .txt"
          />
          <Typography style={{ color: "grey" }}>
            .pdf, .doc, .docx, .rtf, txt.
          </Typography>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "green" }}
                checked={termsAccepted}
                onChange={this.handleTermsAcceptedChange}
              />
            }
            label="I accept the terms and conditions"
          />
        </div>
        <br />
        <div>
          <Button
            type="submit"
            variant="contained"
            disabled={!termsAccepted}
            style={{
              color: termsAccepted ? "white" : "gray",
              background: termsAccepted ? "green" : "lightgray",
              marginLeft:'150px'
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(JobApp);


// import { Box, Card, Container, Typography, createStyles, withStyles, WithStyles, Badge, Avatar, Button } from '@material-ui/core';
// import React, { Component } from 'react';

// const styles = createStyles({
//   mainbox: {
//     marginTop: '50px',
//     width: '100%',
//     height: '700px',
//     background: 'lightgrey'
//   },
//   avatar: {
//     backgroundColor: '#3f51b5', // Customize the background color of the outer circle
//     color: '#fff', // Customize the text color of the numbering
//     fontWeight: 'bold', // Customize the font weight of the numbering
//   },
// });

// interface HotelmgmtProps extends WithStyles<typeof styles> {}

// class Hotelmgmt extends Component<HotelmgmtProps> {
//   render() {
//     const { classes } = this.props;
//     const number = 1;  
//     return (
//       <Container maxWidth="md" className={classes.mainbox}>
//         <Box>
//           <Typography>Hotel Management System</Typography>
//           <p>Hourly-public</p>
//         </Box>

//         <Box>
//           <Typography>Project Description</Typography>
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt eligendi magnam eaque laboriosam,
//             quisquam fugiat qui, earum pariatur ducimus mollitia at voluptates quidem laudantium quia ab voluptatum
//             laborum esse perspiciatis harum consequatur officia veritatis aliquid? Itaque eligendi, architecto
//             perferendis molestiae rerum, quae porro modi voluptatibus veniam possimus deserunt exercitationem quia.
//             Quibusdam sunt aliquid temporibus impedit beatae eius iusto. Ad cupiditate harum dolorem laudantium
//             perferendis blanditiis quis enim vel voluptatibus error fuga ipsa amet iste suscipit, aliquid veniam magni
//             perspiciatis nihil quo atque praesentium, quos officia! Ipsa, facilis laudantium pariatur ut minima adipisci
//             totam! Et aut deleniti repudiandae neque tempore!
//           </p>
//         </Box>
        
//         <Box>
//           <Typography>Project Time:</Typography>
//           <Badge  color="secondary">
//             <Avatar className={classes.avatar}>{number}</Avatar>
//             less than  30hrs/week
//             Hourly
//           </Badge>
//           <Badge  color="secondary">
//             <Avatar className={classes.avatar}>{number}</Avatar>
//             1 to 3 months
//              project lenght
//           </Badge>
//           <Badge  color="secondary">
//             <Avatar className={classes.avatar}>{number}</Avatar>
//             Intermediate
//             I am looking  for mix experience and value
//           </Badge>
//         </Box>
//         <Box>
//             <Typography>Activity  on this  job</Typography>
//             <p>Proposales</p>   
//             <p>Last viewed by the client</p>
//             <p>Invite sends</p>
//             <p>Unanswered invites</p>
//         </Box>
//         <Box>
//             <Typography>Skills  and expertise</Typography>
//             <Button>PHP</Button>
//             <Button>SQL</Button>
//             <Button>Android</Button>
//         </Box>
//       </Container>
//     );
//   }
// }

// export default withStyles(styles)(Hotelmgmt);