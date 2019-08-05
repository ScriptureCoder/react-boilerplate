import React from 'react';
import {Post} from "../helpers/services";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled : false
        }
    }

    componentDidMount(){
        window.scroll(0,0);

    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };

    formHandler=(e)=>{
        e.preventDefault();
        this.setState({disabled:true});
        Post("/login").then(result=>{
            this.setState({disabled:false});
            if (result.token_type){

            }
        })
    };


    render() {
        const {state} = this;
        return (
            <div className="logbody">
                <div className="sign-in">
                    <div className="sign-in-cont sign-width">
                        <header className="head">
                            <img src="../../images/logo-01-copy.png" alt="" width="250"/>
                        </header>
                        <div className="formsec">

                            <form onSubmit={this.formHandler}>
                                <h2>Login</h2>
                                <div className="row">
                                    <div className="field">
                                        <span>
                                            <input type="email" name="email" onChange={this.onChange} placeholder="Your email" required/>
                                        </span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="field">
                                        <span>
                                            <input type="password" name="password" placeholder="Your password" onChange={this.onChange}/>
                                        </span>
                                    </div>

                                </div>
                                <div className="row">
                                    <button className="signin" disabled={state.disabled}>
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
