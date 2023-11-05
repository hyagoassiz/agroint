import React from "react";
import "./ConfirmName.css"

//components
import InputR from "../inputR";
import Button from "../button";


function ConfirmName() {


    return (
        <div>

            <div className="confirmName-container">
                <span className="title-confirmName">Confirme seu nome</span>

                <form className="form-login" onSubmit={""}>

                    <div>
                        <label className="label-login">Nome</label>
                        <InputR
                            size="230px"
                            name="Nome"
                            type="text"
                        // onChange={handleEmailChange}
                        />
                    </div>

                    <div>
                        <label className="label-login">Sobrenome</label>
                        <InputR
                            size="230px"
                            name="Sobrenome"
                            type="text"
                        // onChange={handlePasswordChange}
                        />
                    </div>

                    <div>
                        <Button
                            name="Confirmar"
                            type="submit"
                            size="250px"
                        />

                    </div>


                </form>



            </div>

        </div>

    );
}

export default ConfirmName;