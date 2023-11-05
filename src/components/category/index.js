import React from "react";
import "./Category.css"


function Category(props){
    return(
        <div className="category-container">
            <img className="icon-category" src={props.icon} alt="" />
            <span className="title-category">{props.name}</span>
        </div>
    );
}

export default Category;