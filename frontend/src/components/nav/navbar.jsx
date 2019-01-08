import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

import React from 'react';
import ResumeUploadModal from "./resume_upload_modal";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.state = { isModalOpen: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }


    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/login');
    }

    render() {
        return <div>
            <div id="top-bar-container">
              <div id="top-bar-left">
                <div id="top-bar-logo" onClick={() => this.props.history.push("/home")}>
                  <div id="logo-monogram">fj</div>
                  <span>flexjobs</span>
                </div>
              </div>
              <div id="top-bar-right">
                <div id="about-button">About</div>
                <div id="how-it-works-button" onClick={() => this.props.history.push("/how-it-works")}>
                  How It Works
                </div>
                <div id="navbar-resume-button" onClick={this.openModal}>
                  Update Resume
                </div>
                <div id="logout-button" onClick={this.logoutUser}>
                  Log Out
                </div>
              </div>
            </div>
            <ResumeUploadModal loggedIn={Boolean(this.props.currentUser)} isOpen={this.state.isModalOpen} onClose={this.closeModal} />
          </div>;
    }
}

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

export default withRouter(connect(
    mapStateToProps,
    { logout }
)(NavBar));
