import React from "react";
import StaffCard from "../../common/StaffCard";
import { StaffWrapper } from "../../../style";

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
    <div>
      <div className="float-right">

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
