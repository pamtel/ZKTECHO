import React from "react";
import Card from "@material-ui/core/Card";
import { InformationIcon } from "../Icons";
import { ClockIcon } from "../Icons";
import { ProgressIcon } from "../Icons";
import Divider from "@material-ui/core/Divider";
import { StaffWrapper } from '../../style'

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

const StaffCard = () => {
  return (
    <StaffWrapper>
      {staffData.map((data, index) => (
        <div key={index}>
          <Card className="card-wrapper p-4">
            <div className="float-right ">
              <InformationIcon />
            </div>
            <div className="flex justify-center pt-4">
              <img
                src={data.img}
                alt="icon"
                className="border-4 border-blue-600 rounded-full"
              />
            </div>
            <div className="text-center fontSize-thirteen">
              <p className="fontSize-twentyfour font-bold pt-3 capitalize">
                {data.name}
              </p>
              <p className="uppercase light-gray">creative director</p>
            </div>
            <div className="flex items-center justify-center pt-2 pb-6">
              <span>
                <ClockIcon />
              </span>
              <span className="px-3">
                <ProgressIcon />
              </span>
              <span className="fontSize-thirteen ash">63%</span>
            </div>
            <Divider />
            <p className="text-center fontSize-thirteen ash pt-4">
              {data.mail}
            </p>
          </Card>
        </div>
      ))}
    </StaffWrapper>
  );
};

export default StaffCard;
