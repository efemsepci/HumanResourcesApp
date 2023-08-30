import React, { Component} from 'react'
import {Link} from "react-router-dom"
import TextField from "@mui/material/TextField"
import PersonnelService from '../services/PersonnelService'



export default class ListPersonnelComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            personnel : [],
            filteredPersonnel: [],
            nameFilter: '',
            lastNameFilter: '',
            tcNoFilter:'',
            departmentFilter:''
        }
    }
  componentDidMount(){
    PersonnelService.getPersonnel().then((responds) => {
        this.setState({personnel: responds.data});
        this.setState({filteredPersonnel: responds.data});
    });
  }

  handleFilterChange = (filterType, value) => {
    this.setState({
      [filterType]: value,
    });
  };

  applyFilters = () => {
    const { personnel, nameFilter, lastNameFilter, tcNoFilter, departmentFilter } = this.state;
    const filteredList = personnel.filter((personnel) => {
      return (
        personnel.firstName.toLowerCase().includes(nameFilter.toLowerCase()) &&
        personnel.lastName.toLowerCase().includes(lastNameFilter.toLowerCase()) &&
        personnel.tcNo.toLowerCase().includes(tcNoFilter.toLowerCase()) &&
        personnel.department.toLowerCase().includes(departmentFilter.toLowerCase())

      );
    });

    this.setState({
      filteredPersonnel: filteredList,
    });
  };

  handlePersonnelDetail = (personnelId) => {
    console.log("Personnel ID:", personnelId);
  }
  
  deletePersonnel(id){
    PersonnelService.deletePersonnel(id).then(res => {
      this.setState({filteredPersonnel: this.state.filteredPersonnel.filter(personnel => personnel.id !== id)})
    })
  }
  		
  


  render() {

    const { filteredPersonnel, nameFilter, lastNameFilter, tcNoFilter, departmentFilter } = this.state;

    return (
      <div>
        <div className='row'>
             <Link to="/" className="btn btn-danger" onClick={localStorage.removeItem('userRole')}>Exit</Link>
        </div>
        <div>
          <br></br>
        </div>
        <div className='row'>
          <Link to="/admin" className="btn btn-secondary">Admin</Link>
        </div>
        <h2 className="text-center">Personnel List</h2>
        <div className='row'>
             <Link to="/add-personnel" className="btn btn-primary">Add Personnel</Link>
        </div>
        <div className='row'>
          <br></br>
        </div>

        <div className='row'>
            <div className="search">
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Name"
                value={nameFilter}
                onChange={(e) => this.handleFilterChange('nameFilter', e.target.value)}
                />
            </div>
            <div className="search">
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Surname"
                value={lastNameFilter}
                onChange={(e) => this.handleFilterChange('lastNameFilter', e.target.value)}
                />
            </div>
            <div className="search">
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="TC NO"
                value={tcNoFilter}
                onChange={(e) => this.handleFilterChange('tcNoFilter', e.target.value)}
                />
            </div>
            <div className="search">
                <select style={{ width: 200 , height: 55}} value = {departmentFilter} onChange={(e) => this.handleFilterChange('departmentFilter', e.target.value)}>
                    <option selected hidden>Department</option>
                    <option value = 'SOFTWARE_DEVELOPMENT'>Software Development</option>
                    <option value = 'RESEARCH_DEVELOPMENT'>Research Development</option>
                </select>
            </div>
            <div className='search'>
             <Link style={{marginLeft: "10px", marginTop: "6px"}} to = "/personnel" className="btn btn-warning" onClick={this.applyFilters}>Search</Link>
            </div>
        </div>
        
       
        <div className = "row">
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>TC No</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredPersonnel.map(
                            (personnel1) =>
                            <tr key = {personnel1.id}>
                                <td>{personnel1.firstName}</td>
                                <td>{personnel1.lastName}</td>
                                <td>{personnel1.tcNo}</td>
                                <td>
                                  <Link to = {`/update-personnel/${personnel1.id}`} className="btn btn-info" >Update</Link>
                                  <Link to ={`/view-personnel/${personnel1.id}`} className="btn btn-primary" style={{marginLeft: "10px"}} onClick={this.handlePersonnelDetail.bind(personnel1.id)}>View</Link>
                                  <Link className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => this.deletePersonnel(personnel1.id)} >Delete</Link>
                                  <Link to = {`/view-possible-inventory/${personnel1.id}`} className="btn btn-dark" style={{marginLeft: "10px"}}>Inventory</Link>
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
