import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';
import HowItWorks from "./how_it_works";

const mapStateToProps = (state) => {
    const jobs = state.jobs.data === undefined ? [{ jobDescription: "" }] : state.jobs.data;
    const currentResume = state.resumes[0] === undefined ? "" : state.resumes[0].text;
    return {
        jobs: jobs,
        currentResume: currentResume
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks);