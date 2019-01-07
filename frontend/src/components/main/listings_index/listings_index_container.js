import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import ListingsIndex from "./listings_index";
// import { updateTask, createTask, fetchTasks } from "../../../../../actions/task_actions";
// import { fetchProject } from "../../../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.jobs.data,
    currentResume: state.resumes[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingsIndex));