import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Dept from "./pages/Department";
import Login from "./pages/login";
//import Layout from "./pages/Layout";
import Navbar from "./component/navbar";

export default function App() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar/>}>
              <Route path="login" element={<Login/>}/>
              <Route index element={<Home/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="dept" element={<Dept/>}/> 
            </Route>    
          </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
