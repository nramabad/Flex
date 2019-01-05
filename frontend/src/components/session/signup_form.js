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
            firstPage: true,
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.toPageOne = this.toPageOne.bind(this);
        this.toPageTwo = this.toPageTwo.bind(this);
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

    toPageOne(e) {
        e.preventDefault();
        this.setState({ firstPage: true });
    }

    toPageTwo(e) {
        e.preventDefault();
        let user = { 
            email: this.state.email, 
            username: this.state.username, 
            password: this.state.password, 
            password2: this.state.password2, 
            resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non erat at urna auctor pretium. Nunc id ligula faucibus, gravida nibh id, convallis est. Sed vitae odio in tortor placerat gravida." 
        };

        this.props.mockSignup(user);
        // debugger
        this.setState({ firstPage: false });
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
        // debugger
        if (Object.keys(this.state.errors).length !== 0) {
            this.state.firstPage = true; // flashes second page before going back to first page
            // also may need to clear errors
        }
        let page = this.state.firstPage ? (
                    <div>
                        <br />
                        <input type="text" value={this.state.username} onChange={this.update("username")} placeholder="Username" />
                        <br />
                        <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
                        <br />
                        <input type="password" value={this.state.password2} onChange={this.update("password2")} placeholder="Confirm Password" />
                        <br />
                        <input type="email" value={this.state.email} onChange={this.update("email")} placeholder="Email" />
                        <br />
                        <button onClick={this.toPageTwo}>Next Page</button>
                        {this.renderErrors()}
                    </div>
                                        ) : (
                    <div>
                        <br />
                        <textarea value={this.state.resume} onChange={this.update("resume")} placeholder="Enter your resume..." required/>
                        <br />
                        <input type="submit" value="Sign Up" />
                        {this.renderErrors()}
                    </div>
                                        );
        return <div className="login-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="login-form">
                {page}
              </div>
            </form>
          </div>;
    }
}

export default withRouter(SignupForm);