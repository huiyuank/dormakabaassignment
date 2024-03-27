"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { headerNames, tableData, tableIterator } from "@/lib/mock";
import { useParams } from "next/navigation";

export default function Detail() {
  const params = useParams<{ id: string }>();
  const doorData = tableData.find((data) => data.id === params.id) ?? {};
  if (doorData)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center">
          <List className="w-full py-0 border-radius-2">
            {tableIterator.map((key) => (
              <ListItem key={key}>
                <ListItemText
                  primary={`${headerNames[key]}: ${doorData[key]}`}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </main>
    );
  return null;
}
