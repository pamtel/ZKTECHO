import * as React from "react";
import TableDashboard from '../common/Table'

const Dashboard = () => {
  return (
    <div className="main-children">
      <div className="contain">
        <div className="content">Dashboard</div>
        <div>
          <TableDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
