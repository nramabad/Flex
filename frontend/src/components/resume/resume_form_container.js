// src/components/session/resume_form_container.js

import { connect } from "react-redux";
import { composeResume, fetchUserResumes } from "../../actions/resume_actions";
import NewResume from "./resume_form";

const mapStateToProps = state => {
  return {
    user: state.session.user,
    errors:state.errors.resume
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeResume: data => dispatch(composeResume(data)),
    fetchUserResumes: (id) => dispatch(fetchUserResumes(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewResume);
