import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function ListTable() {
  return (
    <Table>
      <TableCaption>A list of all llms.txt files location.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>llms.txt</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>DuckDB</TableCell>
          <TableCell>
            <a
              href="https://duckdb.org/duckdb-docs.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              duckdb.org/duckdb-docs.md
            </a>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
