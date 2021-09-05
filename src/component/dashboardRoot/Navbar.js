import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="navbar flex justify-between">
      <div className="input">
        <TextField
        id="input-with-icon-textfield"
        placeholder="search"
        variant="outlined"
        className="w-full"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="opacity-40" />
            </InputAdornment>
          ),
        }}
      />
      </div>

      <div className="w-72">
        <div className="flex items-center">
          <Badge badgeContent={21} color="primary">
            <NotificationsIcon />
          </Badge>
          <div className="flex items-center pl-10">
            <img src="/assests/smallAvatar.svg" alt="icon" />
            <p className='pl-3 font-bold fontSize-sixteen'>Hi, Sarah Cody</p>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
