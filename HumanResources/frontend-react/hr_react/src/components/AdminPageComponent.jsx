import React, { Component } from 'react'
import {Link} from "react-router-dom"
import UserService from '../services/UserService'


export default class AdminPageComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            users : []
        }
    }
  componentDidMount(){
    UserService.getUsers().then((responds) => {
        this.setState({users: responds.data});
    });
    }

    deleteUser(id){
        UserService.deleteUser(id).then(res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)})
          })
    }
  render() {

    const {users} = this.state;

    return (
      <div>
        <div className='row'>
             <Link to="/" className="btn btn-danger" onClick={localStorage.removeItem('userRole')}>Exit</Link>
        </div>
        <h2 className="text-center">User List</h2>
        <div className='row'>
             <Link to="/add-user" className="btn btn-primary">Add User</Link>
        </div>
        <div className='row'>
             <Link to="/personnel" className="btn btn-success">Personnel List</Link>
        </div>
        <div className='row'>
             <Link to="/inventory" className="btn btn-dark">Inventory List</Link>
        </div>
        <div className = "row">
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            (user1) =>
                            <tr key = {user1.id}>
                                <td>{user1.id}</td>
                                <td>{user1.username}</td>
                                <td>{user1.role}</td>
                                <td>
                                <Link className="btn btn-danger"  onClick={() => this.deleteUser(user1.id)} >Delete</Link>
                                </td>
                            
                            </tr>
                        )
                        
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
