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

function App() {
  const userRole = localStorage.getItem("userRole");

  return (
    <div>
      <Router>
        <div className="container">
          <div className="container">
            <Routes>
              <Route path="/" exact element={<LoginScreenComponent />}></Route>
              <Route path="/personnel" element={<ListPersonnelComponent />} />
              <Route
                path="/add-personnel"
                element={<AddPersonnelComponent />}
              ></Route>
              <Route
                exact
                path="/view-personnel/:id"
                element={<PersonnelDetailsComponent />}
              ></Route>
              <Route
                path="/update-personnel/:id"
                element={<UpdatePersonnelComponent />}
              ></Route>
              <Route
                path="/inventory"
                element={<ListInventoryComponent />}
              ></Route>
              <Route
                path="/add-inventory"
                element={<AddInventoryComponent />}
              ></Route>
              <Route
                path="/view-possible-inventory/:id"
                element={<ListAddInventoryComponent />}
              ></Route>
              <Route
                path="update-inventory/:id"
                element={<UpdateInventoryComponent />}
              ></Route>
              <Route path="/admin" element={<AdminPageComponent />}></Route>
              <Route
                path="/add-user"
                element={<AddUserScreenComponent />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
