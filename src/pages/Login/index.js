import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";


// images
import logoAgro from "../../assets/agrotis.png"
import iconEmail from "../../assets/email.png"
import iconPadlock from "../../assets/padlock.png"

// components
import Input from "../../components/input"
import Button from "../../components/button"


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/clientes', { replace: true });
        } catch (error) {
            console.log("Erro ao fazer login", error);
            alert("Usuário ou senha inválida");
        }
    };

    return (
        <div className="container-login">
            <img className="logo-login" src={logoAgro} alt="Agro" />
            <span className="title-login">AgroInt</span>

            <form className="form-login" onSubmit={handleSubmit}>

                <div>
                    <label className="label-login">E-mail</label>
                    <Input
                        icon={iconEmail}
                        name="Digite seu e-mail"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div>
                    <label className="label-login">Senha</label>
                    <Input
                        icon={iconPadlock}
                        name="Digite sua senha"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <div>
                    <Button
                        name="Login"
                        type="submit"
                        size="250px"
                    />

                </div>
            

            </form>
        </div>
    );
}

export default Login;