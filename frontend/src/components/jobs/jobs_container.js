import { connect } from "react-redux";
import { fetchJobs, fetchJob } from "../../actions/job_actions";
import Jobs from "./jobs";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: () => dispatch(fetchJobs()),
    fetchJob: (id) => dispatch(fetchJob(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
