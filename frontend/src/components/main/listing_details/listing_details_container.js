import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import ListingDetails from "./listing_details";
import { fetchJobs } from "../../../actions/job_actions";

// import { updateTask, createTask, fetchTasks } from "../../../../../actions/task_actions";
// import { fetchProject } from "../../../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  let job = "";
  if (ownProps.match.params.jobId !== undefined && Object.keys(state.jobs).length !== 0) {
    job = state.jobs.data[ownProps.match.params.jobId];
  }

  return {
    job: job 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingDetails));