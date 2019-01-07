// src/components/session/login_form_container.js

import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SignIn from "./signin_test";

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    loginDemo: () => dispatch(login({ email: "demo@flex.jobs", password: "hireme!" }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
