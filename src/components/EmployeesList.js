import React, { Component } from 'react';
import Employee from './Employee';

export default class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: 'ShowAll',
            hideLogin: false,
            inputValue: '',
            // Show all employees as default
            employeesList: this.props.employees.map((em) =>
                <li key={em.email}><Employee name={em.name} status={em.status} /></li>)
        };
    }

    updateSelectorValue(e) {
        let list = this.props.employees;
        // Filter by status and name:
        if (e.target.value !== 'ShowAll') {
            list = list.filter((em) =>
                em.status === e.target.value);
        }

        // Map by name:
        list = list.filter((em) =>
            em.name.startsWith(this.state.inputValue));

        // Map each item to li element:
        list = list.map((em) =>
            <li key={em.email}><Employee name={em.name} status={em.status} /></li>);

        this.setState({
            selectValue: e.target.value,
            employeesList: list
        });
    }

    updateInputValue(e) {
        let list = this.props.employees;
        // Filter by status:
        if (this.state.selectValue !== 'ShowAll') {
            list = list.filter((em) =>
                em.status === this.state.selectValue);
        }

        // Map by name:
        list = list.filter((em) =>
            em.name.startsWith(e.target.value));

        // Map each item to li element:
        list = list.map((em) =>
            <li key={em.email}><Employee name={em.name} status={em.status} /></li>);

        this.setState({
            inputValue: e.target.value,
            employeesList: list
        });
    }

    render() {
        return (
            <div className='employeesListLabel'>
                <div className='pageTitle' style={{ 'margin-bottom': '10px' }}>
                    <u>List of employees:</u>
                </div>
                <input className='input' type='text' name='EmployeeName' placeholder='Search by name...'
                    onChange={e => this.updateInputValue(e)} />
                <select className="select" value={this.state.selectValue} style={{ 'margin-bottom': '10px' }}
                    onChange={e => this.updateSelectorValue(e)} >
                    <option value="ShowAll">Show All Employees</option>
                    <option value="Working">Working</option>
                    <option value="On Vacation">On Vacation</option>
                    <option value="Lunch Time">Lunch Time</option>
                    <option value="Business Trip">Business Trip</option>
                </select>
                <ul>
                    {this.state.employeesList}
                </ul>
            </div >
        )
    }
}