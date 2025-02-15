import React from "react";
import { graft } from "../../assets/images";
import { Nav } from "react-bootstrap";

export const Footer = () => {
    return (
        <div className="row footer mx-0">
            <Nav.Link eventKey="graft" className="col align-self-center">
                <div className="col align-self-center">
                    <img alt="" src={graft} height={45} className="d-inline-block align-top align-center pt-2"/>
                    <figcaption className="caption pb-2">Graft</figcaption>
                </div>
            </Nav.Link>
            <Nav.Link eventKey="connect" className="col align-self-center">
                <div className="col footer-columns align-self-center">
                    <i className="fas fa-folder-open fa-2x footer-icons  pt-2"></i>
                    <figcaption className="caption-white pb-2">Connect</figcaption>
                </div>
            </Nav.Link>
            <Nav.Link eventKey="create" className="col align-self-center">
                <div className="col footer-columns align-self-center">
                    <i className="fas fa-edit fa-2x footer-icons  pt-2"></i>
                    <figcaption className="caption-white pb-2">Create</figcaption>
                </div>
            </Nav.Link><Nav.Link eventKey="library" className="col align-self-center">
                <div className="col footer-columns align-self-center">
                    <i className="fas fa-image fa-2x footer-icons  pt-2"></i>
                    <figcaption className="caption-white pb-2">Library</figcaption>
                </div>
            </Nav.Link><Nav.Link eventKey="account" className="col align-self-center">
                <div className="col footer-columns align-self-center">
                    <i className="fas fa-address-card fa-2x footer-icons  pt-2"></i>
                    <figcaption className="caption-white pb-2">Account</figcaption>
                </div>
            </Nav.Link>
        </div>
    );
}