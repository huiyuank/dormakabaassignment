import { headerNames, tableData, tableIterator } from "@/lib/mock";
import BasicTable from "./components/table";

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
