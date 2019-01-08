import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Account from '@material-ui/icons/AccountCircleOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

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
      height: `100%`,
      maxHeight: `570px`,
      width: `95%`,
      maxWidth: `1080px`
    },
  },

  form: {
    height: `100%`,
    maxHeight: `570px`,
    width: `100%`,
    maxWidth: `1080px`
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: `100%`,
    maxHeight: `570px`,
    width: `100%`,
    maxWidth: `1080px`
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


  class NewResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: '',
            user:this.props.user.id
            // resumeErrors: '',
            // errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearedErrors = false;
        // this.nextPage = this.nextPage.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.signedIn === true) {
    //         this.props.history.push('/login');
    //     }
    //     // try editing the above later
    //     this.setState({ errors: nextProps.errors })
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    // nextPage(e) {
    //
    //     // this.props.mockSignup(user)
    //     if (this.state.resume.length > 50 && this.state.resume.length < 38380) {
    //         this.setState( { firstPage: false, errors: {} } );
    //
    //     } else if (this.state.resume.length === 0) {
    //         this.setState({ resumeErrors: "Resume field is required" });
    //     } else {
    //         this.setState({ resumeErrors: "Resume / CV must be between 50 and 38380 characters" });
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            text: this.state.resume,
            user: this.state.user
        };
        this.props.composeResume(data).then( () => this.props.fetchUserResumes(this.props.user.id));
        this.props.closeModal();

    }

    // renderResumeErrors() {
    //     if (this.state.resumeErrors) {
    //         return (
    //             <ul >
    //                 <li style={rStyle} key={`error-1`}>
    //                     {this.state.resumeErrors}
    //                 </li>
    //             </ul>
    //         );
    //     }
    // }

    // renderErrors() {
    //     return (
    //         <ul style={errorlist} >
    //             {Object.keys(this.state.errors).map((error, i) => (
    //                 <li style={eStyle} key={`error-${i}`}>
    //                     {this.state.errors[error]}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render(){
      const { classes } = this.props;
      return (
                          <div>
                              <br />
                              <main className={classes.Resumemain}>
                              <form className={classes.form} onSubmit={this.handleSubmit}>
                              <TextField
                                value={this.state.resume} onChange={this.update("resume")}
                                placeholder="Enter your resume..."
                                id="outlined-multiline-static"
                                label="Enter your resume..."
                                multiline
                                rows="18"
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
                                className={classes.submit}
                              >
                                Upload Resume
                              </Button>
                              </form>
                              </main>

                          </div>
                        )

    }

  }
  export default withRouter(connect()(withStyles(styles)(NewResume)))
