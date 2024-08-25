import Link from "next/link";
import Banner from "./components/banner";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Banner />

      <p className=" text-sm text-neutral-400">Join to start learning</p>
      <Link href='/docs' className="p-4 rounded-lg border border-neutral-200 hover:border-neutral-400">
        <Image src='/logo.svg' width={60} height={12} />
      </Link>

    </main>
  );
}
