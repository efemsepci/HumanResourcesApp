import React, { Component } from 'react'
import {Link} from "react-router-dom"
import InventoryService from '../services/InventoryService'


export default class ListInventoryComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            inventory: [],
            filteredInventory: [],
            inventoryTypeFilter: ''
        }
    }

    componentDidMount(){
        InventoryService.getInventory().then((responds) => {
            this.setState({inventory: responds.data});
            this.setState({filteredInventory: responds.data});
        });
      };

    handleFilterChange = (filterType, value) => {
        this.setState({
          [filterType]: value,
        });
      };

    applyFilters = () => {
        const { inventory, inventoryTypeFilter } = this.state;
        const filteredList = inventory.filter((inventory) => {
          return (
            inventory.inventoryType.toLowerCase().includes(inventoryTypeFilter.toLowerCase())
            
    
          );
        });
    
        this.setState({
          filteredInventory: filteredList,
        });
      };

      deleteInventory(id){
        InventoryService.deleteInventory(id).then(res => {
          this.setState({filteredInventory: this.state.filteredInventory.filter(inventory => inventory.id !== id)})
        })
      }

  render() {


    const {filteredInventory, inventoryTypeFilter} = this.state


    return (
        <div>
          <div className='row'>
             <Link to="/" className="btn btn-danger" onClick={localStorage.removeItem('userRole')}>Exit</Link>
        </div>
        <h2 className="text-center">Inventory List</h2>

        <div className='row'>
             <Link to="/add-inventory" className="btn btn-primary">Add Inventory</Link>
        </div>
        <div className='row'>
          <br></br>
        </div>
        
        <div className='row'>
          <div className="search">
                <select style={{ height: 37 }} value = {inventoryTypeFilter} onChange={(e) => this.handleFilterChange('inventoryTypeFilter', e.target.value)}>
                    <option selected hidden>Select a inventory type</option>
                    <option value = 'MOUSE'>Mouse</option>
                    <option value = 'COMPUTER'>Computer</option>
                    <option value = 'DISK'>Disk</option>
                    <option value = 'CAR'>Car</option>
                </select>
            </div>
            <div className='search'>
             <Link to = "/inventory" className="btn btn-warning" onClick={this.applyFilters}>Search</Link>
            </div>
        </div>
       
        <div className = "row">
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Entering Date</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Serial No</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredInventory.map(
                            (inventory1) =>
                            <tr key = {inventory1.id}>
                                <td>{inventory1.id}</td>
                                <td>{inventory1.inventoryType}</td>
                                <td>{inventory1.enteringDate}</td>
                                <td>{inventory1.brand}</td>
                                <td>{inventory1.model}</td>
                                <td>{inventory1.serialNo}</td>
                                <td>{inventory1.inventoryStatus}</td>
                                <td>
                                <Link className="btn btn-danger"  onClick={() => this.deleteInventory(inventory1.id)} >Delete</Link>
                                <Link to={`/update-inventory/${inventory1.id}`} clasName="btn btn-info" style={{marginLeft:"10px"}} onClick={console.log(inventory1)}>Update</Link>
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
