import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import ListingsIndex from "./listings_index";
import { listingsSelector } from "../../../reducers/selectors"
// import { updateTask, createTask, fetchTasks } from "../../../../../actions/task_actions";
// import { fetchProject } from "../../../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  const jobs = state.jobs.data === undefined ? [{ jobDescription: "" }] : state.jobs.data;
  const currentResume = state.resumes[0] === undefined ? "" : state.resumes[0].text;
  return listingsSelector({
    jobs: jobs,
    currentResume: currentResume
  });;
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingsIndex));