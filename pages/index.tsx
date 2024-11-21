import localFont from "next/font/local";
import Footer from "@/components/footer";
import ListTable from "@/components/list-table";
import Header from "@/components/header";
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]`}
    >
      <main className="flex flex-col w-full pt-40">
        <Header />
        <ListTable />
      </main>
      <Footer />
    </div>
  );
}
