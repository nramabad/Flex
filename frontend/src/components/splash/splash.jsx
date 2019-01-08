import React from 'react';
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import {Link}from 'react-router-dom';
class SplashPage extends React.Component {

  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.loginDemo();
  }

  render() {
    return (
      <div id="splash-page-container">
        <div id="splash-page-content">
          <div className="splash-page-content-item" id="splash-title">
            FlexJobs
          </div>
          <div className="splash-page-content-item" id="splash-subtitle">
            Job searching made easy.
          </div>
          <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className="splash-page-content-item" id="splash-try-button">
            Try now
          </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginDemo: () => dispatch(login({ email: "demo@flex.jobs", password: "hireme!" }))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SplashPage);
