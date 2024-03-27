import Chip from "@mui/material/Chip";
import TableCell from "@mui/material/TableCell";
import { ConnectionStatus } from "./table";
import Link from "next/link";

interface BasicCellProps {
  identifier: string;
  value: string;
  link: string;
}

export default function BasicCell({
  identifier,
  value,
  link,
}: BasicCellProps): React.ReactElement {
  if (identifier === "connectionStatus") {
    return value === ConnectionStatus.Online ? (
      <TableCell align="right" key={identifier}>
        <Link className="block" href={link}>
          <Chip color="success" />
        </Link>
      </TableCell>
    ) : (
      <TableCell align="right" key={identifier}>
        <Link href={link}>
          <Chip color="error" />
        </Link>
      </TableCell>
    );
  } else if (identifier === "name") {
    return (
      <TableCell component="th" scope="row">
        <Link href={link}>{value}</Link>
      </TableCell>
    );
  }
  // Default scenario
  return (
    <TableCell align="right" key={identifier}>
      <Link href={link}>{value}</Link>
    </TableCell>
  );
}
