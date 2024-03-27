import { ConnectionStatus } from "@/app/components/table";

function createData(
  id: string,
  name: string,
  building: string,
  connectionType: string,
  connectionStatus: ConnectionStatus
) {
  return { id, name, building, connectionType, connectionStatus };
}

export const tableIterator: string[] = [
  "name",
  "building",
  "connectionType",
  "connectionStatus",
];

export const headerNames: Record<string, string> = {
  name: "Name",
  building: "Building",
  connectionType: "Connection type",
  connectionStatus: "Connection status",
};

export const tableData: Record<string, string>[] = [
  createData(
    "E2021-YNSFDOWKS",
    "Main Entrance",
    "238 Orchard Blvd",
    "Wired",
    ConnectionStatus.Online
  ),
  createData(
    "E2021-PWMSKMSD",
    "Main Entrance",
    "19 Oxley Rd",
    "Wired",
    ConnectionStatus.Online
  ),
  createData(
    "E2021-SCMENDKOE",
    "Gym",
    "19 Oxley Rd",
    "Wired",
    ConnectionStatus.Online
  ),
  createData(
    "E2021-SFDUCKMX",
    "Garage",
    "238 Orchard Blvd",
    "Wired",
    ConnectionStatus.Online
  ),
  createData(
    "E2021-PSOICIS",
    "Entrance",
    "238 Orchard Blvd",
    "Wirless",
    ConnectionStatus.Online
  ),
  createData(
    "E2021-WEX01MSI",
    "Entrance",
    "238 Orchard Blvd",
    "Wired",
    ConnectionStatus.Online
  ),
  createData(
    "E2021-SDK2JNSX",
    "Entrance",
    "19 Oxley Rd",
    "Wired",
    ConnectionStatus.Online
  ),
  createData(
    "E2021-YUWKXAS9",
    "Entrance",
    "19 Oxley Rd",
    "Wired",
    ConnectionStatus.Online
  ),
];
