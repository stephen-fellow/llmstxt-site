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
    <div className="w-full flex justify-center px-5 sm:px-20 pt-5">
      <Table className="">
        {/* <TableCaption>A list of all llms.txt files location.</TableCaption> */}
        <TableHeader>
          <TableRow className="text-lg font-bold">
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
    </div>
  );
}
