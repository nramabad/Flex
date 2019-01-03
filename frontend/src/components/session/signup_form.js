// src/components/session/signup_form.js

import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            resume: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }
        // try editing the above later
        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            resume: this.state.resume
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        console.log(this.state)
        return <div className="login-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="login-form">
                <br />
                <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email" />
                <br />
                <input type="text" value={this.state.username} onChange={this.update("username")} placeholder="Username" />
                <br />
                <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
                <br />
                <input type="password" value={this.state.password2} onChange={this.update("password2")} placeholder="Confirm Password" />
                <br /><br></br>
                <textarea value={this.state.resume} onChange={this.update("resume")} placeholder="Enter your resume..."></textarea>
                <br />
                <input type="submit" value="Submit" />
                {this.renderErrors()}
              </div>
            </form>
          </div>;
    }
}

export default withRouter(SignupForm);