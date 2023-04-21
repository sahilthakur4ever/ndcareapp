import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AdminLogin from "./AdminLogin";
import Adminhome from "./Adminhome";
import Allmedicine from "./pages/Allmedicine";
import Addmedicine from "./pages/Addmedicine";
import Updatemedicine from "./pages/Updatemedicine";
import Contactus from "./Contactus";


function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/adminlogin" element={<AdminLogin/>}></Route>
  <Route path="/adminhome" element={<Adminhome/>}></Route>
  <Route path="/allmedicine" element={<Allmedicine/>}></Route>
  <Route path="/addmedicine" element={<Addmedicine/>}></Route>
  <Route path="/update-medicine/:id" element={<Updatemedicine/>}></Route>
  <Route path="/contact" element={<Contactus/>}></Route>


</Routes>
</BrowserRouter>
    </>
  );
}


export default App;
