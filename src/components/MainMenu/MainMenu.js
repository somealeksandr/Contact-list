import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./MainMenu.css";


const MainMenu = () =>{
    return(
            <div className="row d-flex">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-center mb-2">
                        <ul className="w-100 m-0 d-flex justify-content-start d-flex align-items-center">
                            <li className="nav-item active p-2 mx-3 menu--item"><Link to="/" className="link">Home</Link></li>
                            <li className="nav-item active p-2 mx-3 menu--item"><Link to="/about" className="link">About</Link></li>
                            <li className="nav-item active p-2 mx-3 menu--item"><Link to="/add" className="link">Add Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
    )
}

export default MainMenu;