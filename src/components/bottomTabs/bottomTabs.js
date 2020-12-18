import React from 'react'
import { Tab } from "react-bootstrap";
import { Footer } from "../footer";
import { Cards } from "../cards";

export const BottomTabs = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="graft">
      <Tab.Content>
        <Tab.Pane eventKey="graft">
          <Cards/>
        </Tab.Pane>
        <Tab.Pane eventKey="connect">
          <p className="m-5">Connect</p>
        </Tab.Pane>
        <Tab.Pane eventKey="create">
          <p  className="m-5">Create</p>
        </Tab.Pane>
        <Tab.Pane eventKey="library">
          <p  className="m-5">Library</p>
        </Tab.Pane>
        <Tab.Pane eventKey="account">
          <p  className="m-5">Account</p>
        </Tab.Pane>
      </Tab.Content>
      <Footer/>
    </Tab.Container> 
  );
}