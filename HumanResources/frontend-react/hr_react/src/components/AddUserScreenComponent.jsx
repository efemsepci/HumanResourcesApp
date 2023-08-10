import React, { Component } from 'react'
import {Link} from "react-router-dom"
import UserService from '../services/UserService'


export default class AddUserScreenComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            role:''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);

        this.addUser = this.addUser.bind(this);
    }

    addUser = (e) =>{
        e.preventDefault();

        let user = {username: this.state.username, password: this.state.password, role: this.state.role};
        console.log('user => ' + JSON.stringify(user));

        UserService.createUser(user)
    }

    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changeRoleHandler = (event) => {
        this.setState({role: event.target.value});
    }

  render() {


    return (
        <div>
        <div className = "container">
        <Link to="/admin" className="btn btn-primary">Go Back</Link>
            <div className='row'>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-cenet'>Add User</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Username</label>
                                <input placeholder='Username' name='username' className='form-control' value={this.state.username} onChange={this.changeUsernameHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input placeholder='Password' type='password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Role</label>
                                <select onChange={this.changeRoleHandler} value = {this.state.role}>
                                    <option selected hidden>Select a option</option>
                                    <option value = 'ADMIN'>Admin</option>
                                    <option value = 'HR_MANAGEMENT'>HR Manager</option>
                                    <option value = 'INVENTORY_MANAGEMENT'>Inventory Manager</option>
                                </select>
                            </div>
                            <Link to="/personnel" className="btn btn-success" onClick={this.addUser}>Save</Link>
                            <Link to="/admin" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
