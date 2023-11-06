import React from "react";
import "./CardClient.css"
// import StatusClient from '../../assets/green.png'; // Substitua pelo caminho real do ícone de Configurações

function CardClient(props) {
    return (
        <div className="card-client">
            <div className="info-client">
                <span className="title-card">EMPRESA GERÉRICA 1</span>
                <span className="li-card">RAZÃO SOCIAL: EMPRESA</span>
                <span className="li-card">CNPJ: 00.000.111/0001-12</span>
                <div className="info-status-client">
                    {/* <img className="nav-icon-status" src={StatusClient} alt="Configurações" /> */}
                    <span className="li-card">Cliente Ativo</span>
                </div>

            </div>

        </div>
    );

}

export default CardClient;