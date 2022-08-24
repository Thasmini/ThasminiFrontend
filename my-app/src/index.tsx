import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/organisms/Login";
import PetList from "./components/organisms/PetList";
import PetDetails from "./components/organisms/PetDetails";
import CreatePet from "./components/organisms/CreatePet";
import UpdatePet from "./components/organisms/UpdatePet";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/apps" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/pets/add" element={<CreatePet />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/pets/edit/:id" element={<UpdatePet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
