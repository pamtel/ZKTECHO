import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import RightSidebar from "../dashboardRoot/RightSidebar";
import Divider from "@material-ui/core/Divider";
import StaffCard from '../common/StaffCard'

const People = () => {
  return (
    <div className="people-wrapper">
      <div className="contain">
        <div className="content">
          <h3 className="fontSize-thirtytwo font-bold pb-3">People </h3>

          <Tabs value="None" indicatorColor="primary" textColor="primary">
            <Tab label="Tab A" value="Tab A" />
            <Tab label="Tab B" value="Tab B" />
          </Tabs>
          <Divider />
        </div>
        <div>
          <StaffCard />
        </div>
      </div>
      <div className="right-nav">
        <RightSidebar />
      </div>
    </div>
  );
};

export default People;
