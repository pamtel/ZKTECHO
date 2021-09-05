import TableDashboard from '../common/Table'
import Chart from "../common/Chart"

const Dashboard = () => {
  const month = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  return (
    <div className="main-children">
      <div className="contain p-8">
        <div className="mb-7">
          <Chart month={month} />
        </div>
        <div>
          <TableDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
