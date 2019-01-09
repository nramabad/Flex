import {
    RECEIVE_RESUME_ERRORS,
} from '../actions/resume_actions';

const _nullErrors = [];

const ResumeErrorsReducer = (state = _nullErrors, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESUME_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default ResumeErrorsReducer;
