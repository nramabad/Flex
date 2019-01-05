// src/components/session/signup_form_container.js

import { connect } from 'react-redux';
import { signup, mockSignup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        mockSignup: user => dispatch(mockSignup(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);