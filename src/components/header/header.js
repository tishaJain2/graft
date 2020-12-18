import { Navbar } from "react-bootstrap";
import React from "react";
import { logo } from "../../assets/images";

export const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <div className="row justify-content-between w-100">
                <Navbar.Brand href="#" className="mx-auto">
                    <img alt="" src={logo} className="align-center" />
                </Navbar.Brand>
                <div className="justify-content-end nav my-auto">
                    <i className="fas fa-bell fa-lg" style={{color: "#AA38B0"}}></i>
                </div>
            </div> 
        </Navbar>
    );
}