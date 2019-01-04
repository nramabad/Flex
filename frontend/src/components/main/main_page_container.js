import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import JobsPage from "./main_page";
// import { updateTask, createTask, fetchTasks } from "../../../../../actions/task_actions";
// import { fetchProject } from "../../../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobsPage));