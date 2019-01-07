// src/components/session/signup_form_container.js

import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupMaterial from './signup_form_material';

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupMaterial);
