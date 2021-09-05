import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { NavLink } from "react-router-dom";
import { DashboardIcon } from "../Icons";
import { PeopleIcon } from "../Icons";
import { UserIcon } from "../Icons";
import { TransactionIcon } from "../Icons";
import { SettingsIcon } from "../Icons";
import { LogoutIcon } from "../Icons";
import { ArrowUpIcon } from "../Icons";
import { KeyIcon } from "../Icons";

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
            <p className="font-black fontSize-sixteen">Sarah Cody</p>
            <p className="fontSize-twelve gray">sarah@gmail.com</p>
          </div>
        </div>
        <div>
          <List component="nav" aria-label="main mailbox folders">
            <NavLink exact to="/" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/people" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/user" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <UserIcon />
                </ListItemIcon>
                <ListItemText primary="User groups" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/transaction" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <TransactionIcon />
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
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/api" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <KeyIcon />
                </ListItemIcon>
                <ListItemText primary="API key" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/logout" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </NavLink>
          </List>
        </div>
        <div className="mt-8 mr-4 arrowup bg-blue-600 p-2 rounded-md">
          <div className="flex items-center cursor-pointer ">
            <ArrowUpIcon />
            <p className="pl-4 text-white ">Top Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
