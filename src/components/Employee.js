import React, { Component } from 'react';

export default class Employee extends Component {
    render() {
        return (
            <div className='employee' style={{ color: this.props.status === "On Vacation" ? "red" : "black" }}>
                <label>{this.props.name} ({this.props.status})</label>
            </div>
        )
    }
}