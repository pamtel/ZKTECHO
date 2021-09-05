import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Divider from "@material-ui/core/Divider";
import { Timer } from '../Icons'
import { ChartIcon } from '../Icons'

const RightSidebar = () => {
  return (
    <div className="pl-3">
      <div className="flex justify-between items-center bg-blue-600 text-white py-3 px-3 rounded-md mr-12 mb-5">
        <p className="font-medium fontSize-sixteen">Select Team</p>
        <KeyboardArrowDownIcon />
      </div>
      <div className="pb-5">
        <p className="font-semibold pb-5 fontSize-eighteen">Design Team</p>
				<Timer />
      </div>
			<div className="pb-7">
				<p className="font-semibold pb-5 fontSize-eighteen">Projects</p>
				<div className="project-wrapper">
				<div className="project-content py-6">
					<p className="fontSize-twelve gray pl-3 uppercase">Total</p>
					<div className="flex pl-3">
						<div></div>
						<p className="fontSize-twentysix dark-color font-bold">145</p>
					</div>
				</div>
				<div className="project-content py-6 ">
					<p className="fontSize-twelve gray pl-3 uppercase">Total</p>
					<div className="flex pl-3">
						<div></div>
						<p className="fontSize-twentysix dark-color  font-bold">145</p>
					</div>
				</div>
				</div>
			</div>
			<div className="px-2">
			<Divider />
			</div>
			<div className="mt-8 flex chat-wrapper p-3">
				<div className="chat-icon flex justify-center items-center">
					<ChartIcon />
				</div>
				<div className="pl-2">
					<p className="fontSize-twelve gray">DECLARATION CENTER</p>
					<div className="flex">
						<p className="dark-color fontSize-sixteen font-bold">Intenal messages</p>
						<KeyboardArrowDownIcon />
					</div>
				</div>
			</div>
    </div>
  );
};

export default RightSidebar;
