import React from "react";

//components
import Nav from "../../components/nav";
import Category from "../../components/category";

//images
import logoConfig from "../../assets/config.png"


function Config() {
    return (
        <div className="body-container">
            <Nav/>
            <Category
                icon={logoConfig}
                name="CONFIGURAÇÕES"
            />

        </div>
    );

}

export default Config;