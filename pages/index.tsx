import localFont from "next/font/local";
import Head from "next/head";
import Footer from "@/components/footer";
import ListTable from "@/components/list-table";
import Header from "@/components/header";
import { columns } from "@/components/list-table-columns";
import useSiteStore from "@/lib/store";

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home() {
    const data = useSiteStore((state) => state.getProducts());
    return (
        <>
            <Head>
                <title>
                    llms.txt directory - Find llms.txt files across the web
                </title>
                <meta
                    name="description"
                    content="A directory of llms.txt files from various products and services, following the llmstxt.org standard."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:title" content="llms.txt directory" />
                <meta
                    property="og:description"
                    content="Find and explore llms.txt files from various products and services."
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="llms.txt directory" />
                <meta
                    name="twitter:description"
                    content="Find and explore llms.txt files from various products and services."
                />
            </Head>
            <div
                className={`${geistMono.variable} min-h-screen flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-mono)]`}
            >
                <main className="flex flex-col flex-grow w-full">
                    <Header />
                    <ListTable columns={columns} data={data} />
                </main>
                <Footer />
            </div>
        </>
    );
}
