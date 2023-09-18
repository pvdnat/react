import React from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations

let Header = (props)=>{
    return(
        <>
            <div>
            <NavLink to="/" className="button" activeclassname="success" >Home </NavLink>
            <NavLink to="/UserSignIn" className="button" activeclassname="success" >Sign In </NavLink>
            <NavLink to="/Product" className="button" activeclassname="success" >Product </NavLink>
            </div>
        </>
    )
}

export default Header;