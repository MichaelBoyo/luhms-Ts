import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate health Data
function createData(
  id: number,
  date: string,
  testType: string,
  testValue: string,
  doctorsRemark: string
) {
    return { id, date,  testType, testValue, doctorsRemark };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Hiv', 'negative', "youre good to go"),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Health History</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Test Type</TableCell>
            <TableCell>Test Value</TableCell>
            <TableCell align="right">Doctor's Remark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.testType}</TableCell>
              <TableCell>{row.testValue}</TableCell>
              <TableCell align="right">{row.doctorsRemark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
