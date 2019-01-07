import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import ListingDetails from "./listing_details";

// import { updateTask, createTask, fetchTasks } from "../../../../../actions/task_actions";
// import { fetchProject } from "../../../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  let job = "";
  if (ownProps.match.params.jobId !== undefined && Object.keys(state.jobs).length !== 0) {
    const jobIndex = state.jobs.data.findIndex(job => job.jobId === ownProps.match.params.jobId)
    job = state.jobs.data[jobIndex];
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