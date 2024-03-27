import Chip from "@mui/material/Chip";
import TableCell from "@mui/material/TableCell";
import { ConnectionStatus } from "./table";

interface BasicCellProps {
  identifier: string;
  value: string;
}

export default function BasicCell({
  identifier,
  value,
}: BasicCellProps): React.ReactElement {
  if (identifier === "connectionStatus") {
    return value === ConnectionStatus.Online ? (
      <TableCell align="right" key={identifier}>
        <Chip color="success" />
      </TableCell>
    ) : (
      <TableCell align="right" key={identifier}>
        <Chip color="error" />
      </TableCell>
    );
  } else if (identifier === "name") {
    return (
      <TableCell component="th" scope="row">
        {value}
      </TableCell>
    );
  }
  // Default scenario
  return (
    <TableCell align="right" key={identifier}>
      {value}
    </TableCell>
  );
}
