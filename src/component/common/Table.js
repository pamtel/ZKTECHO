import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { TableIcon } from "../Icons";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const TableData = [
  {
    date: "28/08/20",
    referenceID: "11232346322",
    beneficiaryName: "Sarah Bright",
    beneficiaryBank: "GTB-0229345434",
    remarks: "Laundry",
    amount: "10,000",
    status: "Pending",
  },
  {
    date: "28/08/20",
    referenceID: "11232346322",
    beneficiaryName: "Floyd Miles",
    beneficiaryBank: "GTB-0229345434",
    remarks: "Airtime",
    amount: "10,000",
    status: "Completed",
  },
  {
    date: "28/08/20",
    referenceID: "11232346322",
    beneficiaryName: "Sarah Nguyen",
    beneficiaryBank: "GTB-0229345434",
    remarks: "Laundry",
    amount: "10,000",
    status: "Failed",
  },
  {
    date: "28/08/20",
    referenceID: "11232346322",
    beneficiaryName: "Esther Howard",
    beneficiaryBank: "GTB-0229345434",
    remarks: "",
    amount: "10,000",
    status: "Pending",
  },
  {
    date: "28/08/20",
    referenceID: "11232346322",
    beneficiaryName: "Jenny Wilson",
    beneficiaryBank: "GTB-0229345434",
    remarks: "Refund for...",
    amount: "10,000",
    status: "Completed",
  },
];

const DashboardTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <div className="p-10">
          <div className="flex justify-between items-center pb-3">
            <p className="fontSize-eighteen dark-gray font-bold">
              My transactions
            </p>
            <Button endIcon={<ArrowForwardIosIcon />} color="primary">
              See all
            </Button>
          </div>
          <Divider />
          <Table>
            <TableHead>
              <TableCell></TableCell>
              <TableCell>
                <span className="fontSize-sixteen font-bold dim-gray">
                  Date
                </span>
              </TableCell>
              <TableCell>
                <span className="fontSize-sixteen font-bold dim-gray">
                  ReferenceID
                </span>
              </TableCell>
              <TableCell>
                <span className="fontSize-sixteen font-bold dim-gray">
                  Beneficiary
                </span>
              </TableCell>
              <TableCell>
                <span className="fontSize-sixteen font-bold dim-gray">
                  Remarks
                </span>
              </TableCell>
              <TableCell>
                <span className="fontSize-sixteen font-bold dim-gray">
                  Amount
                </span>
              </TableCell>
              <TableCell>
                <span className="fontSize-sixteen font-bold dim-gray">
                  Status
                </span>
              </TableCell>
            </TableHead>
            <TableBody>
              {TableData.map((row, index) => (
                <TableRow>
                  <TableCell key={index}>
                    <TableIcon />
                  </TableCell>
                  <TableCell>
                    <span className="fontSize-sixteen font-bold light-blue">
                      {row.date}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="fontSize-sixteen darkblue font-bold">
                      {row.referenceID}
                    </span>
                  </TableCell>
                  <TableCell>
                    <p className="fontSize-sixteen font-bold light-blue pb-2">
                      {row.beneficiaryName}
                    </p>
                    <p className="fontSize-forteen light-blue">
                      {row.beneficiaryBank}
                    </p>
                  </TableCell>
                  <TableCell>
                    <span className="fontSize-sixteen light-blue ">
                      {row.remarks}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="fontSize-sixteen font-bold light-blue">
                      {row.amount}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`${
                        row.status === "Pending"
                          ? "text-royalblue"
                          : row.status === "Completed" ? "text-forestgreen"
                          : row.status === "Failed" ? "text-tomato"
                          : ""
                      } font-bold fontSize-sixteen`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
};

export default DashboardTable;
