import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Login from "../pages/Login";
import Clients from "../pages/Clients";
import Users from "../pages/Users";
import Config from "../pages/Config";


import Private from "./Private";

function RoutesApp() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/clientes" element={<Private><Clients /></Private>} />
                <Route path="/usuarios" element={<Private><Users /></Private>} />
                <Route path="/config" element={<Private><Config /></Private>} />
            </Routes>

        </BrowserRouter>

    );
}

export default RoutesApp;