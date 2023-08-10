import axios from "axios";

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/im/inventory";

class InventoryService {
  getInventory() {
    return axios.get(INVENTORY_API_BASE_URL);
  }
  getInventoryById(id) {
    return axios.get(INVENTORY_API_BASE_URL + "/" + id);
  }

  createInventory(inventory) {
    return axios.post(INVENTORY_API_BASE_URL, inventory);
  }

  deleteInventory(id) {
    return axios.delete(INVENTORY_API_BASE_URL + "/" + id);
  }

  updateInventory(inventory, id) {
    return axios.put(INVENTORY_API_BASE_URL + "/" + id, inventory);
  }

  updateGivenInventory(personnelId, inventoryId) {
    return axios.put(
      INVENTORY_API_BASE_URL + "/" + personnelId + "/" + inventoryId
    );
  }
}

export default new InventoryService();
