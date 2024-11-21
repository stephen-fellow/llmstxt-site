import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export default function ListTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <div className="w-full flex justify-center px-5 sm:px-20 pt-5">
            <Table className="mx-auto max-w-7xl">
                {/* <TableCaption>A list of all llms.txt files location.</TableCaption> */}
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                    {/* {products.map((product) => (
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
                                {product.token_count["llms-full.txt"] && (
                                    <a
                                        href={product.llmsTxt["llms-full.txt"]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {product.token_count["llms-full.txt"]}
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
                            <TableCell>
                                {product.token_count["llms.txt"] && (
                                    <a
                                        href={product.llmsTxt["llms.txt"]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {product.token_count["llms.txt"]}
                                    </a>
                                )}
                            </TableCell>
                        </TableRow>
                    ))} */}
                </TableBody>
            </Table>
        </div>
    );
}
