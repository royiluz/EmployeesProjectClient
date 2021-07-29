import React, { Component } from 'react';
import { addNewUser } from '../api/api';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            nameValue: '',
            status: "Working"
        };
    }

    // Login user when click
    async handleClick() {
        if (!(validateFullName(this.state.nameValue)))
            return;

        // Add User to DB
        await addNewUser(this.props.emailToRegister, this.state.nameValue, this.state.status);

        this.props.registerCallback({
            'email': this.props.emailToRegister,
            'name': this.state.nameValue,
            'status': this.state.status
        });
    }

    updateEmailValue(e) {
        this.setState({
            emailValue: e.target.value
        });
    }

    updateNameValue(e) {
        this.setState({
            nameValue: e.target.value
        });
    }

    handleChangeSelect(e) {
        this.setState({
            status: e.target.value
        });
    }

    render() {
        return (
            <div className='registerLabel' style={{ display: this.props.show ? "block" : "none" }}>
                <div className='registerTitle'>
                    Register ({this.props.emailToRegister})
                </div>
                {/* <input className='input' type='"email"' name='UserEmail' placeholder='Your Email' value={this.state.emailValue} handleLoginCallback onChange={e => this.updateEmailValue(e)} /> */}
                <input type='text' name='Name' placeholder='Your Full Name' value={this.state.nameValue} onChange={e => this.updateNameValue(e)} />
                <div className='updateStatus'>
                    <label>Status: </label>
                    <select className="select" value={this.state.status} onChange={e => this.handleChangeSelect(e)} >
                        <option value="Working">Working</option>
                        <option value="On Vacation">On Vacation</option>
                        <option value="Lunch Time">Lunch Time</option>
                        <option value="Business Trip">Business Trip</option>
                    </select>
                </div>
                <button onClick={e => this.handleClick(e)} className="btn btn-primary">Register</button>
            </div>
        )
    }
}

function validateFullName(fullName) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regName.test(fullName)) {
        alert('Please enter your full name (first & last name).');
        return false;
    } else {
        return true;
    }
}
