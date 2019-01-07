// src/components/session/resume_form_container.js

import { connect } from "react-redux";
import { composeResume } from "../../actions/resume_actions";
import Resume from "./resume_form";

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeResume: data => dispatch(composeResume(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumeForm);
