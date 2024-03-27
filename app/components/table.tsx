import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicCell from "./cell";
import Link from "next/link";

export enum ConnectionStatus {
  Online = "Online",
  Offline = "Offline",
}

interface BasicTableProps {
  iterator: string[];
  headers: Record<string, string>;
  tableData: Record<string, string>[];
}

export default function BasicTable({
  iterator,
  headers,
  tableData,
}: BasicTableProps): React.ReactElement {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="door table">
        <TableHead>
          <TableRow>
            {iterator.map((key) => {
              return <TableCell key={headers[key]}>{headers[key]}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => (
            <TableRow
              key={data.name}
              className="cursor-pointer"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <Link href="/"> */}
              {iterator.map((key) => (
                <BasicCell key={key} identifier={key} value={data[key]} />
              ))}
              {/* </Link> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
