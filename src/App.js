import "./style.js";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/pages/Dashboard";
import People from "./component/pages/People";
import User from "./component/pages/User";
import Transaction from "./component/pages/Transaction";
import Setting from "./component/pages/Setting";
import Api from "./component/pages/Api";
import Logout from "./component/pages/Logout";
import DashboardRoot from "./component/dashboardRoot";

function App() {
  return (
    <DashboardRoot>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/people" component={People} />
        <Route path="/user" component={User} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/setting"component={Setting} />
        <Route path="/api" component={Api} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </DashboardRoot>
  );
}

export default App;
