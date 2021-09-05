import React from "react";
import StaffCard from "../../common/StaffCard";
import { StaffWrapper } from "../../../style";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const staffData = [
  {
    img: "/assests/john.png",
    name: "john ohue",
    mail: "john23@yopmail.com",
  },
  {
    img: "/assests/sarah.png",
    name: "sarah bright",
    mail: "sarah@yopmail.com",
  },
  {
    img: "/assests/kola.png",
    name: "kola adegun",
    mail: "kola@yopmail.com",
  },
  {
    img: "/assests/mary.png",
    name: "mary nimi",
    mail: "mary3@yopmail.com",
  },
  {
    img: "/assests/tom.png",
    name: "tom jerry",
    mail: "tom@yopmail.com",
  },
  {
    img: "/assests/henry.png",
    name: "henry paul",
    mail: "henry@yopmail.com",
  },
  {
    img: "/assests/sarah.png",
    name: "sarah bright",
    mail: "sarah@yopmail.com",
  },
  {
    img: "/assests/john.png",
    name: "john ohue",
    mail: "john23@yopmail.com",
  },
];

const All = () => {
  return (
    <div className="">
      <div className="relative pt-5">
        <div className="flex justify-end">
          <div className="mr-4 flex">
            <div className="input-text flex items-center">
            <p className="font-bold">Filters:</p>          
            </div>
            <TextField
              id="input-with-icon-textfield"
              placeholder="Most Recent"
              variant="outlined"
              className="bg-white opacity-80 search"
              size="small"
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search here"
              variant="outlined"
              className="bg-white opacity-80"
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
        </div>
      </div>
      <StaffWrapper>
        {staffData.map((data, index) => (
          <div key={index}>
            <StaffCard img={data.img} name={data.name} mail={data.mail} />
          </div>
        ))}
      </StaffWrapper>
    </div>
  );
};

export default All;
