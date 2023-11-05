import React from "react";

//components
import Nav from "../../components/nav";
import Category from "../../components/category";

//images
import logoUsers from "../../assets/users.png"

function Users() {
    return (
        <div className="body-container">
            <Nav/>
            <Category
                icon={logoUsers}
                name="USUÁRIOS"
            />

        </div>
    );

}

export default Users;