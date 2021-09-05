import React from "react";
import RightSidebar from "../dashboardRoot/RightSidebar";
import Divider from "@material-ui/core/Divider";
import { Switch, Route } from "react-router-dom";
import All from "./subPages/All";
import Organization from "./subPages/Organization";
import { NavLink } from 'react-router-dom';

const People = () => {
  return (
    <div className="people-wrapper">
      <div className="contain">
        <div className="content">
          <h3 className="fontSize-thirtytwo font-bold pb-3">People </h3>

          <div className="flex">
          <NavLink to="/people" exact activeClassName="activePeople">
          <p className="fontSize-eighteen light-blue font-bold">All</p>
          </NavLink>

          <NavLink to="/people/organization" activeClassName="activePeople">
          <p className="fontSize-eighteen light-blue font-bold ml-10">Organization</p>
          </NavLink>
          </div>

          <Divider />

          <Switch>
            <Route path="/people/" exact component={All} />
            <Route path="/people/organization" component={Organization} />
          </Switch>
        
        </div>
        <div></div>
      </div>
      <div className="right-nav">
        <RightSidebar />
      </div>
    </div>
  );
};

export default People;
