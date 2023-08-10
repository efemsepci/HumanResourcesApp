import React, { useEffect, useState } from 'react';
import { useParams , Link} from 'react-router-dom';
import InventoryService from '../services/InventoryService';


const UpdateInventoryComponent = () =>{
    const {id} = useParams();
    const [inventory, setInventory] = useState({
        inventoryType:'',
        enteringDate:'',
        brand:'',
        model:'',
        serialNo:'',
        inventoryStatus:'',
        assignId:null
    });

    useEffect(() => {
        InventoryService.getInventoryById(id)
        .then(data => {
          setInventory(data.data);
        })
        .catch(error => {
          console.error('Error fetching inventory details:', error);
            
        });
      }, [id])

      const handleUpdate = (e) =>{
        e.preventDefault();

        const updatedInventory = {
            id: id,
            inventoryType: inventory.inventoryType,
            enteringDate: inventory.enteringDate,
            brand: inventory.brand,
            model: inventory.model,
            serialNo: inventory.serialNo,
            inventoryStatus: inventory.inventoryStatus,
            assignId: inventory.assignId
          }

    
          InventoryService.updateInventory(updatedInventory, id)
          .then(res => {
              console.log("Inventory updated succesfully", res);
          })
          .catch((error) => {
              console.error('Error updating inventory:', error);
            });

            console.log(updatedInventory);
        }
        
        return(
            <div>
        <div className = "container">
        <Link to="/inventory" className="btn btn-primary">Go Back</Link>
            <div className='row'>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-cenet'>Update Inventory</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Inventory Type</label>
                                <select onChange={(e) => setInventory({...inventory, inventoryType: e.target.value})} value = {inventory.inventoryType}>
                                    <option selected hidden>Select a option</option>
                                    <option value = 'MOUSE'>Mouse</option>
                                    <option value = 'COMPUTER'>Computer</option>
                                    <option value = 'DISK'>Disk</option>
                                    <option value = 'CAR'>Car</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Entering Date</label>
                                <input placeholder='XX/XX/XXXX' name='enteringDate' className='form-control' value={inventory.enteringDate} onChange={(e) => setInventory({...inventory, enteringDate: e.target.value})}/>
                            </div>
                            <div className='form-group'>
                                <label>Brand</label>
                                <input placeholder='Brand' name='brand' className='form-control' value={inventory.brand} onChange={(e) => setInventory({...inventory, brand: e.target.value})}/>
                            </div>
                            <div className='form-group'>
                                <label>Model</label>
                                <input placeholder='Model' name='model' className='form-control' value={inventory.model} onChange={(e) => setInventory({...inventory, model: e.target.value})}/>
                            </div>
                            <div className='form-group'>
                                <label>Serial No</label>
                                <input placeholder='Serial No' name='serialNo' className='form-control' value={inventory.serialNo} onChange={(e) => setInventory({...inventory, serialNo: e.target.value})}/>
                            </div>
                            <div className='form-group'>
                                <label>Status</label>
                                <select onChange = {(e) => setInventory({...inventory, inventoryStatus: e.target.value})} value = {inventory.inventoryStatus}>
                                    <option selected hidden>Select a option</option>
                                    <option value = 'IN_STAFF'>In Staff</option>
                                    <option value = 'IN_THE_OFFICE'>In the Office</option>
                                    <option value = 'IN_STORAGE'>In Storage</option>
                                </select>
                            </div>
                           
                            <Link to="/inventory" className="btn btn-success" onClick={handleUpdate}>Update</Link>
                            <Link to="/inventory" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
        )
}

export default UpdateInventoryComponent;