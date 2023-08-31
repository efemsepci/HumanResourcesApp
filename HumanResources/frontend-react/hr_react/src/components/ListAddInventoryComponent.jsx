import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import InventoryService from '../services/InventoryService';


const ListAddInventoryComponent = () =>{
    const [inventoryList, setInventoryList] = useState([]);
    const [search, setSearch] = useState('');
    const {id} = useParams();

    useEffect(() => {
        InventoryService.getInventory()
        .then(data => {
            const filtered = data.data.filter(item => (item.inventoryStatus === 'IN_STORAGE' || item.inventoryStatus === 'IN_THE_OFFICE') &&
            (search === '' || item.inventoryType.toLowerCase() === search.toLowerCase())
            )
            

            setInventoryList(filtered);

        })
        .catch(error => {
            console.error("Error fetching inventory list: ", error);
        });
    }, [search]);

    const handleGiveInventory = (personnelId,inventoryId) =>{
        
        InventoryService.updateGivenInventory(personnelId, inventoryId)
          .then(res => {
              console.log("Personnel updated succesfully", res);
          })
          .catch((error) => {
              console.error('Error updating personnel:', error);
            });
    }

    return(
        <div>
            <div style = {{marginRight:"10px"}} className='row'><h2>Possible Inventory List</h2></div>
            <div style = {{marginRight:"10px"}} className='row'>
                <Link  to="/personnel" className="btn btn-primary">Go Back</Link>
            </div>
            <div><br></br></div>
            <div className = "row">
            <div className="search" style={{height:50}}>
                <select id={search}  value = {search} onChange={(e) => setSearch(e.target.value)}>
                    <option selected hidden>Select a inventory type</option>
                    <option value = 'MOUSE'>Mouse</option>
                    <option value = 'COMPUTER'>Computer</option>
                    <option value = 'DISK'>Disk</option>
                    <option value = 'CAR'>Car</option>
                </select>
            </div>
            
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventoryList.map(
                            (inventory1) =>
                            <tr key = {inventory1.id}>
                                <td>{inventory1.id}</td>
                                <td>{inventory1.inventoryType}</td>
                                <td>{inventory1.brand}</td>
                                <td>{inventory1.model}</td>
                                <td>{inventory1.inventoryStatus}</td>
                                <td>
                                <Link to="/personnel" onClick={() => handleGiveInventory(id,inventory1.id)}>Give</Link> </td>
                            
                            </tr>
                        )
                        
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default ListAddInventoryComponent;