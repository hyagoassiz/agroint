import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { auth } from '../../firebaseConnection';
import { signOut } from "firebase/auth";

//images
import logoAgro from "../../assets/agrotis.png";
import User from "../../assets/user.png";
import Clients from "../../assets/clients.png";
import Users from "../../assets/users.png";
import Config from "../../assets/config.png";
import Logoff from "../../assets/logoff.png";

//components
import Button from "../button";


function Nav() {


    const handleLogout = async () => {
        await signOut(auth);
    }

    return (

        <div className="nav-container">
            <nav className="nav-menu">
                <div className="agroint">
                    <img className="agroint-nav" src={logoAgro} alt="Logo" />
                    <span className="title-nav">AgroInt</span>
                </div>

                <div className="user-info">
                    <img src={User} alt="Usuário" />
                    <p>Olá, Fulano!</p> {/* Update this part to display the actual user's name */}
                </div>

                <Button
                    size="180px"
                    name="Novo Cliente"
                />
                <br />

                <ul className="menu-section">
                    <Link to="/clientes">
                        <li><img className="nav-icon" src={Clients} alt="Clientes" />Clientes</li>
                    </Link>

                    <Link to="/usuarios">
                        <li><img className="nav-icon" src={Users} alt="Usuários" />Usuários</li>
                    </Link>

                    <Link to="/config">
                        <li><img className="nav-icon" src={Config} alt="Configurações" />Configurações</li>
                    </Link>

                    <li onClick={handleLogout}><img className="nav-icon" src={Logoff} alt="Sair" />Sair</li>
                </ul>
            </nav>
        </div>

    );
}

export default Nav;
