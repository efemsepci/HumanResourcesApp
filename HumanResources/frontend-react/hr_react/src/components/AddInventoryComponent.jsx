import React, { Component } from 'react'
import {Link} from "react-router-dom"
import InventoryService from '../services/InventoryService';


export default class AddInventoryComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            inventoryType:'',
            enteringDate:'',
            brand:'',
            model:'',
            serialNo:'',
            inventoryStatus:''
        }
        this.changeInventoryTypeHandler = this.changeInventoryTypeHandler.bind(this);
        this.changeEnteringDateHandler = this.changeEnteringDateHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeSerialNoHandler = this.changeSerialNoHandler.bind(this);
        this.changeInventoryStatusHandler = this.changeInventoryStatusHandler.bind(this);

        this.addInventory = this.addInventory.bind(this);
    }

    addInventory = (e) =>{
        e.preventDefault();

        let inventory = {inventoryType: this.state.inventoryType, enteringDate: this.state.enteringDate, brand: this.state.brand, model: this.state.model, serialNo: this.state.serialNo, inventoryStatus: this.state.inventoryStatus};
        console.log('inventory => ' + JSON.stringify(inventory));

        InventoryService.createInventory(inventory)
    }



    changeInventoryTypeHandler = (event) => {
        this.setState({inventoryType: event.target.value});
    }
    changeEnteringDateHandler = (event) => {
        this.setState({enteringDate: event.target.value});
    }
    changeBrandHandler = (event) => {
        this.setState({brand: event.target.value});
    }
    changeModelHandler = (event) => {
        this.setState({model: event.target.value});
    }
    changeSerialNoHandler = (event) => {
        this.setState({serialNo: event.target.value});
    }
    changeInventoryStatusHandler = (event) => {
        this.setState({inventoryStatus: event.target.value});
    }

  render() {

    return (
        <div>
        <div className = "container">
        <Link to="/inventory" className="btn btn-primary">Go Back</Link>
            <div className='row'>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-cenet'>Add Inventory</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Inventory Type</label>
                                <select onChange={this.changeInventoryTypeHandler} value = {this.state.inventoryType}>
                                    <option selected hidden>Select a option</option>
                                    <option value = 'MOUSE'>Mouse</option>
                                    <option value = 'COMPUTER'>Computer</option>
                                    <option value = 'DISK'>Disk</option>
                                    <option value = 'CAR'>Car</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Entering Date</label>
                                <input placeholder='XX/XX/XXXX' name='enteringDate' className='form-control' value={this.state.enteringDate} onChange={this.changeEnteringDateHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Brand</label>
                                <input placeholder='Brand' name='brand' className='form-control' value={this.state.brand} onChange={this.changeBrandHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Model</label>
                                <input placeholder='Model' name='model' className='form-control' value={this.state.model} onChange={this.changeModelHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Serial No</label>
                                <input placeholder='Serial No' name='serialNo' className='form-control' value={this.state.serialNo} onChange={this.changeSerialNoHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Status</label>
                                <select onChange = {this.changeInventoryStatusHandler} value = {this.state.inventoryStatus}>
                                    <option selected hidden>Select a option</option>
                                    <option value = 'IN_STAFF'>In Staff</option>
                                    <option value = 'IN_THE_OFFICE'>In the Office</option>
                                    <option value = 'IN_STORAGE'>In Storage</option>
                                </select>
                            </div>
                           
                            <Link to="/inventory" className="btn btn-success" onClick={this.addInventory}>Save</Link>
                            <Link to="/inventory" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
