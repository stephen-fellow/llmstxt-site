import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import useSiteStore from "@/lib/store";
export default function ListTable() {
  const sites = useSiteStore((state) => state.getSites(""));
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
        {sites.map((site) => (
          <TableRow key={site.name}>
            <TableCell>{site.name}</TableCell>
            <TableCell>
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                {site.urlDisplay}
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
