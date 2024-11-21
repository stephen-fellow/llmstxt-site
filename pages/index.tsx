import localFont from "next/font/local";
// import Footer from "@/components/footer";
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
        <div
            className={`${geistMono.variable} min-h-screen flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-mono)]`}
        >
            <main className="flex flex-col flex-grow w-full">
                <Header />
                <ListTable columns={columns} data={data} />
            </main>
            {/* <Footer /> */}
        </div>
    );
}
