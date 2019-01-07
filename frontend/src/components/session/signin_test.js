import React from 'react';
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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
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
});

class SignIn extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          email: '',
          password: '',
          errors: {}
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Home page
  componentWillReceiveProps(nextProps) {
      if (nextProps.currentUser === true) {
          this.props.history.push('/home');
      }

      // Set or clear errors
      this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
      return e => this.setState({
          [field]: e.currentTarget.value
      });
  }

  // Handle form submission
  handleSubmit(e) {
      e.preventDefault();

      let user = {
          email: this.state.email,
          password: this.state.password
      };

      this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
      return (
          <ul>
              {Object.keys(this.state.errors).map((error, i) => (
                  <li key={`error-${i}`}>
                      {this.state.errors[error]}
                  </li>
              ))}
          </ul>
      );
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" value={this.state.email} onChange={this.update('email')} autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" value={this.state.password} onChange={this.update('password')}autoComplete="current-password" />
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
              Sign in
            </Button>
          </form>
        </Paper>
        {this.renderErrors()}
      </main>
    );
  }
}


export default withRouter(connect()(withStyles(styles)(SignIn)))