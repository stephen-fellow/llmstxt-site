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
      className={`${geistMono.variable} min-h-screen flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-mono)]`}
    >
      <main className="flex flex-col flex-grow w-full">
        <Header />
        <ListTable />
      </main>
      <Footer />
    </div>
  );
}
