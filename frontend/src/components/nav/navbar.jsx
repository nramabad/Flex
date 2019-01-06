import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        // this.getLinks = this.getLinks.bind(this);
    }
    
    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <div id="top-bar-container">
                <div id="top-bar-left">
                    <div id="top-bar-logo">FlexJobs</div>
                </div>
                <div id="top-bar-right">
                    <div>Log Out</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

export default connect(
    mapStateToProps,
    { logout }
)(NavBar);
