import React from "react";
import Card from "@material-ui/core/Card";
import { InformationIcon } from "../Icons";
import { ClockIcon } from "../Icons";
import { ProgressIcon } from "../Icons";
import Divider from "@material-ui/core/Divider";

const StaffCard = ({ img, name, mail }) => {
  return (
    <Card className="card-wrapper p-4">
      <div className="float-right ">
        <InformationIcon />
      </div>
      <div className="flex justify-center pt-4">
        <img
          src={img}
          alt="icon"
          className="border-4 border-blue-600 rounded-full"
        />
      </div>
      <div className="text-center fontSize-thirteen">
        <p className="fontSize-twentyfour font-bold pt-3 capitalize">{name}</p>
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
      <p className="text-center fontSize-thirteen ash pt-4">{mail}</p>
    </Card>
  );
};

export default StaffCard;
