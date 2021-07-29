import React, { Component } from 'react';
import { getSpecificUser } from '../api/api';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            hideLogin: false
        };
    }

    // Login user when click
    async handleClick() {
        //email validation
        if (!validateEmail(this.state.inputValue))
            return;
        const user = await getSpecificUser(this.state.inputValue);
        // if User exist in DB:
        let curUser = null;
        if (user.length > 0) {
            curUser = user[0];
        }

        await this.props.loginCallback(curUser, this.state.inputValue);
        this.setState({ hideLogin: true });
    }

    updateInputValue(e) {
        // Save input value in state when changed
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (
            <div className='loginLabel' style={{ display: this.state.hideLogin ? "none" : "block" }}>
                <div className='loginTitle'>
                    Welcome to MyWorkStatus
                </div>
                <input className='input' type='text' name='UserEmail' placeholder='My Username'
                    value={this.state.inputValue}
                    onChange={e => this.updateInputValue(e)} />
                <button onClick={e => this.handleClick(e)} className="btn btn-success">Login</button>
            </div>
        )
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(email).toLowerCase()))
        return true;
    else {
        alert("You have entered an invalid email address!")
        return false;
    }
}