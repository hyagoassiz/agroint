import React, { useState, useEffect } from "react";
import { auth } from '../../firebaseConnection';
import { signOut } from "firebase/auth";
import './Clients.css'; // Importe o arquivo CSS para estilização

// Componentes
import ConfirmName from "../../components/confirmName";
import Nav from "../../components/nav";
import Category from "../../components/category";
import CardClient from "../../components/cardClient";
import Search from "../../components/search";
import ButtonFilter from "../../components/buttonFilter";

// ImagensButtonFilter
import logoClients from "../../assets/clients.png";

function Clients() {
    const [style, setStyle] = useState(""); // Inicialize com uma string vazia

    const storedUser = localStorage.getItem('@detailUser');
    const detailUser = storedUser ? JSON.parse(storedUser) : null;

    useEffect(() => {
        if (!detailUser) {
            setStyle(""); // Atualize o estilo quando detailUser não estiver disponível
        } else {
            setStyle("body-container"); // Defina o estilo padrão quando detailUser estiver disponível
        }
    }, [detailUser]);

    return (
        <div>
            {detailUser ? (
                <div className={style}>
                    <Nav />
                    <Category
                        icon={logoClients}
                        name="CLIENTES"
                    />
                    <Search/>
                    <ButtonFilter/>
                    <ButtonFilter/>
                    <CardClient/>
                    <CardClient/>
                    <CardClient/>
                    <CardClient/>
                    
                </div>
            ) : (
                <div>
                    <ConfirmName />
                </div>
            )}
        </div>
    );
}

export default Clients;
