import React, { Component } from 'react';
import EmployeesList from './EmployeesList';
import { updateStatus } from '../api/api';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Working"
        };
    }

    async handleChangeSelect(e) {
        // Update DB with the correct status
        const status = e.target.value
        await updateStatus(this.props.user.email, status)

        this.props.newStatusCallback(this.props.user.name, status)
        this.setState({ status: status });
    }

    render() {
        return (
            <div className='mainPageLabel' style={{ display: this.props.show ? "block" : "none" }}>
                <div className='pageTitle'>
                    Hello {this.props.user?.name}, you are {StatusEnum[this.props.user?.status]}
                </div>
                <div className='updateStatus'>
                    <label>Update My Current Status</label>
                    <select className="select" value={this.props.user?.status} onChange={async e => await this.handleChangeSelect(e)} >
                        <option value="Working">Working</option>
                        <option value="On Vacation">On Vacation</option>
                        <option value="Lunch Time">Lunch Time</option>
                        <option value="Business Trip">Business Trip</option>
                    </select>
                </div>
                <EmployeesList employees={this.props.employees} />
            </div>
        )
    }
}

const StatusEnum = {
    'Working': 'working',
    'On Vacation': 'on Vacation',
    'Lunch Time': 'at Lunch Time',
    'Business Trip': 'on Business Trip'
}