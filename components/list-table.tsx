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
  const products = useSiteStore((state) => state.getProducts(""));
  return (
    <div className="w-full flex justify-center px-5 sm:px-20 pt-5">
      <Table className="mx-auto max-w-7xl">
        {/* <TableCaption>A list of all llms.txt files location.</TableCaption> */}
        <TableHeader>
          <TableRow className="text-lg font-bold">
            <TableHead>Product</TableHead>
            <TableHead>llms-full.txt</TableHead>
            <TableHead>llms.txt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.product}>
              <TableCell>{product.product}</TableCell>
              <TableCell>
                {product.llmsTxt["llms-full.txt"] && (
                  <a
                    href={product.llmsTxt["llms-full.txt"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    llms-full.txt
                  </a>
                )}
              </TableCell>
              <TableCell>
                {product.llmsTxt["llms.txt"] && (
                  <a
                    href={product.llmsTxt["llms.txt"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    llms.txt
                  </a>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
