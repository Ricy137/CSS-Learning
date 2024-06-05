import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
                className="hover:animate-[cspin_2s]"
                src="./vercel.svg"
                alt="next"
                width={40}
                height={40}
            />
        </main>
    );
}
