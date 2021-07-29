import React, { Component } from 'react';
import { getAll } from './api/api';
import Login from './components/Login';
import MainPage from './components/MainPage';
import Register from './components/Register';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curUser: null,
      showRegister: false,
      showMainPage: false,
      emailToRegister: null,
      employees: []
    }
  }


  handleLoginCallback = async (userLoggedIn, validEmailToRegister) => {
    const allEmployees = await getAll()
    if (userLoggedIn) {
      this.setState({ curUser: userLoggedIn, showMainPage: true });
    }
    // User not exist - need to show register  
    else {
      this.setState({ showRegister: true, emailToRegister: validEmailToRegister });
    }
    this.setState({ employees: allEmployees });
  }

  handleRegisterCallback = (newUserFromRegister) => {
    const list = this.state.employees;
    list.push(newUserFromRegister);
    this.setState({ employees: list, showMainPage: true, showRegister: false, curUser: newUserFromRegister });
  }

  handleChangeStatusCallback = (userName, status) => {
    // change current user status

    let updatedCurUser;
    const list = this.state.employees.map(user => {
      if (user.name === userName) {
        user.status = status;
        updatedCurUser = { ...user };
      }
      return user
    });
    this.setState({ employees: list, curUser: updatedCurUser });
  }


  render() {
    return (
      <div className="App" >
        <Login loginCallback={this.handleLoginCallback} employees={this.state.employees} />
        <Register show={this.state.showRegister} registerCallback={this.handleRegisterCallback} emailToRegister={this.state.emailToRegister} />
        <MainPage show={this.state.showMainPage} employees={this.state.employees} user={this.state.curUser} newStatusCallback={this.handleChangeStatusCallback} />
      </div>
    );
  };
}