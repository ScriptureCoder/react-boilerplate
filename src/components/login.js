import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="logbody">
                <div className="sign-in">
                    <div className="sign-in-cont sign-width">
                        <header className="head">
                            <img src="./assets/images/logo-01-copy.png" alt="" width="250"/>
                        </header>
                        <div className="formsec">

                            <form id="form1">
                                <h2>Login</h2>
                                <div className="row">
                                    <div className="field">
                                        <span>
                                            <input type="email" name="email" id="email-login" placeholder="Your email"
                                                 required="" autoFocus=""/>
                                        </span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="field">

                                        <span>
                                            <input type="password" name="password" id="password-login"
                                                 placeholder="Your password" required="" autoComplete="off"/>
                                        </span>
                                    </div>

                                </div>
                                <div className="row">
                                    <button className="signin" disabled="disabled">
                                        Sign In
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
