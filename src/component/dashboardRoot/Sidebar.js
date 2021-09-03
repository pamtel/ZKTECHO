import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-header">
        <img src="/assests/logo.png" alt="logo" />
      </div>
      <div className="sidebar-wrapper">
        <div className="flex pb-8">
        <img src="/assests/avatar.svg" alt="icon" />
        <div className="pl-3 pt-2">
          <p className="font-black">Sarah Cody</p>
          <p className="text-xs">sarah@gmail.com</p>
        </div>
        </div>
        <div>
          <List component="nav" aria-label="main mailbox folders">
            <NavLink exact to="/" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <img src="/assests/dashboard.svg" alt="icon" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/people" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <img src="/assests/people.svg" alt="icon" />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/user" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <img src="/assests/user.svg" alt="icon" />
                </ListItemIcon>
                <ListItemText primary="User groups" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/transaction" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <img src="/assests/transaction.svg" alt="icon" />
                </ListItemIcon>
                <ListItemText primary="Transactions" />
              </ListItem>
            </NavLink>
          </List>
          <Divider />
          <List
            component="nav"
            aria-label="secondary mailbox folders"
            style={{ paddingTop: "20px" }}
          >
            <NavLink exact to="/setting" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <img src="/assests/setting.svg" alt="icon" />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/api" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <img src="/assests/api.svg" alt="icon" />
                </ListItemIcon>
                <ListItemText primary="API key" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/logout" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <img src="/assests/logout.svg" alt="icon" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </NavLink>
          </List>
          <List
            component="nav"
            aria-label="secondary mailbox folders"
            style={{ paddingTop: "25px" }}
          >
            <div className="top-up">
              <ListItem button>
                <ListItemIcon>
                  <img src="/assests/arrowUp.svg" alt="icon" />
                </ListItemIcon>
                <ListItemText primary="Top Up" />
              </ListItem>
            </div>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
