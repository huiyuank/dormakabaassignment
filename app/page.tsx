import BasicTable, { ConnectionStatus } from "./components/table";

function createData(
  name: string,
  building: string,
  connectionType: string,
  connectionStatus: ConnectionStatus
) {
  return { name, building, connectionType, connectionStatus };
}

const tableIterator: string[] = [
  "name",
  "building",
  "connectionType",
  "connectionStatus",
];

const headerNames: Record<string, string> = {
  name: "Name",
  building: "Building",
  connectionType: "Connection type",
  connectionStatus: "Connection status",
};

const tableData: Record<string, string>[] = [
  createData(
    "Main Entrance",
    "238 Orchard Blvd",
    "Wired",
    ConnectionStatus.Online
  ),
  createData("Main Entrance", "19 Oxley Rd", "Wired", ConnectionStatus.Online),
  createData("Gym", "19 Oxley Rd", "Wired", ConnectionStatus.Online),
  createData("Garage", "238 Orchard Blvd", "Wired", ConnectionStatus.Online),
  createData(
    "Entrance",
    "238 Orchard Blvd",
    "Wirless",
    ConnectionStatus.Online
  ),
  createData("Entrance", "238 Orchard Blvd", "Wired", ConnectionStatus.Online),
  createData("Entrance", "19 Oxley Rd", "Wired", ConnectionStatus.Online),
  createData("Entrance", "19 Oxley Rd", "Wired", ConnectionStatus.Online),
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <BasicTable
          iterator={tableIterator}
          headers={headerNames}
          tableData={tableData}
        />
      </div>
    </main>
  );
}
