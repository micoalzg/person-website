import React from "react";

function MenuItem(props) {
    return (
        <a href={props.href} className="navbar-item" style={{height: "70px"}}>
            {props.text}
        </a>
    );
}

export default MenuItem;