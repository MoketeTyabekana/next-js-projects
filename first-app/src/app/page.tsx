import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My First App!</h1>
      <p className="mt-4 text-lg">This is a simple Next.js application.</p>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        className="mt-8"
      />
    </main>
  );
}
