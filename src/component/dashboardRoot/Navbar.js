import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between">
      <div className="relative input">
        <SearchIcon className="absolute mb-3 opacity-40" />
        <input
          type="text"
          placeholder="search"
          className="py-2 px-6 w-full border rounded-md outline-none"
        />
      </div>

      <div>
        <div className="">
          <Badge badgeContent={21} color="primary">
            <NotificationsIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
