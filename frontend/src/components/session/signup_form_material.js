import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import PDFJS from 'pdfjs-dist';
PDFJS.GlobalWorkerOptions.workerSrc = '/../../pdf.worker.js';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      height:700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  Resumemain: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 817,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 800
  },
});

const eStyle = {
  color:`red`,
  fontWeight: `bold`
};
const rStyle = {
  color:`red`,
  listStyleType: `none`,
  textAlign: 'center',
  fontWeight: `bold`
};
const errorlist = {
  width: `100%`
};


  class SignupMaterial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            resume: '',
            firstPage: true,
            resumeErrors: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.nextPage = this.nextPage.bind(this);
        this.parsePDF = this.parsePDF.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }
        // try editing the above later
        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    parsePDF(e) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const typedArray = new Uint8Array(reader.result);

        PDFJS.getDocument({ data: typedArray }).then(pdf => {
          const allPromises = [];
          const pageTexts = [];

          for (let i = 1; i <= pdf.numPages; i++) {
            allPromises.push(
              pdf.getPage(i).then(page => {
                return page.getTextContent().then(content => {
                  let combinedContent = content.items.map(item => item.str).join('');
                  pageTexts.push(combinedContent);
                });
              })
            );
          }

          Promise.all(allPromises).then(() => {
            const combinedPageTexts = pageTexts.join(' ');
            this.setState({ resume: combinedPageTexts });
          });
        });
      };

      reader.readAsArrayBuffer(selectedFile);
    }

    nextPage(e) {

        // this.props.mockSignup(user)
        if (this.state.resume.length > 50 && this.state.resume.length < 38380) {
            this.setState( { firstPage: false, errors: {} } );

        } else if (this.state.resume.length === 0) {
            this.setState({ resumeErrors: "Resume field is required" });
        } else {
            this.setState({ resumeErrors: "Resume / CV must be between 50 and 38380 characters" });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            resume: this.state.resume
        };

        this.props.signup(user, this.props.history);
    }

    renderResumeErrors() {
        if (this.state.resumeErrors) {
            return (
                <ul >
                    <li style={rStyle} key={`error-1`}>
                        {this.state.resumeErrors}
                    </li>
                </ul>
            );
        }
    }

    renderErrors() {
        return (
            <ul style={errorlist} >
                {Object.keys(this.state.errors).map((error, i) => (
                    <li style={eStyle} key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
      const { classes } = this.props;
      let page = this.state.firstPage ? (
                          <div>
                              <br />
                              <main className={classes.Resumemain}>
                              <form className={classes.form} onSubmit={this.handleSubmit}>
                              <div id="or-div">
                                <span>Copy and paste your resume text into the box below, or...</span>
                                <input
                                  hidden
                                  ref={"pdf-upload"}
                                  id='pdf-upload'
                                  type='file'
                                  accept='.pdf'
                                  onChange={this.parsePDF}
                                />
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  // className={classes.submit}
                                  onClick={e => { this.refs['pdf-upload'].click() }}
                                >
                                  Parse Text From Resume PDF
                                </Button>
                              </div>
                              <TextField
                                value={this.state.resume} onChange={this.update("resume")}
                                placeholder="Paste your resume here..."
                                id="outlined-multiline-static"
                                label="Paste your resume here..."
                                multiline
                                rows="7"

                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                              />
                              <Button
                                type="submit"
                                value="Submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.nextPage}
                                className={classes.submit}
                              >
                                Next Page
                              </Button>
                              {this.renderResumeErrors()}
                              </form>
                              </main>

                          </div>
                                      ) : (
                          <div>
                              <br />

                              <main className={classes.main}>

                                <CssBaseline />
                                <Paper className={classes.paper}>
                                  <div id="session-form-logo-container">
                                    <div id="session-form-logo"></div>
                                  </div>
                                  <Typography component="h1" variant="h5">
                                    Sign Up
                                  </Typography>
                                  {this.renderErrors()}
                                  <form className={classes.form} onSubmit={this.handleSubmit}>

                                    <FormControl margin="normal" required fullWidth>
                                      <InputLabel>Username</InputLabel>
                                      <Input id="username" name="username" value={this.state.username} onChange={this.update("username")} autoFocus />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                      <InputLabel htmlFor="password">Password</InputLabel>
                                      <Input name="password" type="password" id="password" value={this.state.password} onChange={this.update("password")} />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                      <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                      <Input name="password" type="password" id="password" value={this.state.password2} onChange={this.update("password2")}  />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                      <InputLabel htmlFor="email">Email Address</InputLabel>
                                      <Input id="email" name="email" value={this.state.email} onChange={this.update("email")} autoComplete="email"  />
                                    </FormControl>

                                    <FormControlLabel
                                      control={<Checkbox value="remember" color="primary" />}
                                      label="Remember me"
                                    />
                                    <Button
                                      type="submit"
                                      value="Submit"
                                      fullWidth
                                      variant="contained"
                                      color="primary"
                                      className={classes.submit}
                                    >
                                      Sign In
                                    </Button>
                                  </form>
                                </Paper>

                              </main>

                          </div>
                                      );
                    return <div className="login-form-container">
                          <div className="login-form">
                            {page}
                          </div>

                      </div>;

    }

  }
  export default withRouter(connect()(withStyles(styles)(SignupMaterial)))
