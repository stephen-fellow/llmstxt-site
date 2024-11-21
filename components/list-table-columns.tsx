import { ColumnDef } from "@tanstack/react-table";

import type { Product } from "@/lib/store";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "product",
        header: "Product",
    },
    {
        accessorKey: "website",
        header: "Website",
        cell: ({ row }) => {
            const website = row.getValue("website") as string;
            return (
                <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {website.replace(/^https?:\/\//, "")}
                </a>
            );
        },
    },
    {
        accessorKey: "llms-txt",
        header: "llms-txt",
        cell: ({ row }) => {
            const url = row.getValue("llms-txt") as string;
            return (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {url.replace(/^https?:\/\//, "")}
                </a>
            );
        },
    },
    {
        accessorKey: "llms-txt-tokens",
        header: "Tokens",
    },
    {
        accessorKey: "llms-full-txt",
        header: "llms-full-txt",
        cell: ({ row }) => {
            const url = row.getValue("llms-full-txt") as string;
            return (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {url.replace(/^https?:\/\//, "")}
                </a>
            );
        },
    },
    {
        accessorKey: "llms-full-txt-tokens",
        header: "Tokens",
    },
];
