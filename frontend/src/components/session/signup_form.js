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
            resumeErrors: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.nextPage = this.nextPage.bind(this);
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


    nextPage(e) {
        // e.preventDefault();
        // let user = { 
        //     email: this.state.email, 
        //     username: this.state.username, 
        //     password: this.state.password, 
        //     password2: this.state.password2, 
        //     resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non erat at urna auctor pretium. Nunc id ligula faucibus, gravida nibh id, convallis est. Sed vitae odio in tortor placerat gravida." 
        // };

        // this.props.mockSignup(user)
        if (this.state.resume.length > 50 && this.state.resume.length < 38380) {
            this.setState( { firstPage: false } );

        } else if (this.state.resume.length === 0) {
            this.setState({ resumeErrors: "Resume field is required" });
        } else {
            this.setState({ resumeErrors: "Resume / CV must be between 50 and 38380 characters" });
        }
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
    
    renderResumeErrors() {
        if (this.state.resumeErrors) { 
            return (
                <ul>
                    <li key={`error-1`}>         
                        {this.state.resumeErrors}
                    </li>
                </ul>
            );
        }
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
        let page = this.state.firstPage ? (
                            <div>
                                <br />
                                <textarea value={this.state.resume} onChange={this.update("resume")} placeholder="Enter your resume..." />
                                <br />
                                <button onClick={this.nextPage}>Next Page</button>
                                {this.renderResumeErrors()}
                            </div>
                                        ) : (
                            <div>
                                <br />
                                <input type="text" value={this.state.username} onChange={this.update("username")} placeholder="Username" />
                                <br />
                                <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
                                <br />
                                <input type="password" value={this.state.password2} onChange={this.update("password2")} placeholder="Confirm Password" />
                                <br />
                                <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email" />
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