// src/actions/session_actions.js

import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

// We'll dispatch this when our user signs in
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

// This will be used to redirect the user to the login page upon signup
export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});
export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

// Upon signup, dispatch the appropriate action depending on which type of response we receive from the backend
export const signup = user => dispatch => (
    APIUtil.signup(user).then(() => (
        dispatch(receiveUserSignIn())
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

// Upon submitting first page of signup, mock response we receive would contain potential errors
export const mockSignup = user => dispatch => (
    APIUtil.mockSignup(user).then(() => {}, err => (dispatch(receiveErrors(err.response.data))) )
);

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        })
)

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem("jwtToken");
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false);
    // Dispatch a logout action
    dispatch(logoutUser());
};
