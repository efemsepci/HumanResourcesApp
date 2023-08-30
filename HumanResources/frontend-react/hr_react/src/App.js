import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPersonnelComponent from "./components/ListPersonnelComponent";
import AddPersonnelComponent from "./components/AddPersonnelComponent";
import PersonnelDetailsComponent from "./components/PersonnelDetailsComponent";
import UpdatePersonnelComponent from "./components/UpdatePersonnelComponent";
import ListInventoryComponent from "./components/ListInventoryComponent";
import AddInventoryComponent from "./components/AddInventoryComponent";
import ListAddInventoryComponent from "./components/ListAddInventoryComponent";
import UpdateInventoryComponent from "./components/UpdateInventoryComponent";
import LoginScreenComponent from "./components/LoginScreenComponent";
import { useState } from "react";
import AdminPageComponent from "./components/AdminPageComponent";
import AddUserScreenComponent from "./components/AddUserScreenComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import UnauthorizedPage from "./components/UnauthorizedPageComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <div className="container">
            <Routes>
              <Route path="/" exact element={<LoginScreenComponent />}></Route>
              <Route
                path="/personnel"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN", "HR_MANAGEMENT"]}>
                    <ListPersonnelComponent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-personnel"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN", "HR_MANAGEMENT"]}>
                    <AddPersonnelComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                exact
                path="/view-personnel/:id"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN", "HR_MANAGEMENT"]}>
                    <PersonnelDetailsComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/update-personnel/:id"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN", "HR_MANAGEMENT"]}>
                    <UpdatePersonnelComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/inventory"
                element={
                  <ProtectedRoute
                    allowedRoles={["ADMIN", "INVENTORY_MANAGEMENT"]}
                  >
                    <ListInventoryComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/add-inventory"
                element={
                  <ProtectedRoute
                    allowedRoles={["ADMIN", "INVENTORY_MANAGEMENT"]}
                  >
                    <AddInventoryComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/view-possible-inventory/:id"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN", "HR_MANAGEMENT"]}>
                    <ListAddInventoryComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="update-inventory/:id"
                element={
                  <ProtectedRoute
                    allowedRoles={["ADMIN", "INVENTORY_MANAGEMENT"]}
                  >
                    <UpdateInventoryComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN"]}>
                    <AdminPageComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/add-user"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN"]}>
                    <AddUserScreenComponent />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/unauthorized"
                element={<UnauthorizedPage />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
