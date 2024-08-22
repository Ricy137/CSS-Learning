import Link from "next/link";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-y-24px">
            <Link href="/bunny">Bunny</Link>
        </main>
    );
}
