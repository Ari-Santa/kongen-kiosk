import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh w-dvw items-center bg-black">
      <div className="relative h-full flex-1">
        <Image
          src="/kong-harald.webp"
          alt="Kong Harald"
          fill
          priority
          sizes="50vw"
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
        <p className="whitespace-nowrap text-xl font-light uppercase tracking-[0.2em] text-white/90 md:text-2xl lg:text-3xl">
          H.M. Kong Harald V
        </p>
        <span className="h-px w-16 bg-white/30" />
        <p className="whitespace-nowrap text-lg font-light tracking-[0.2em] text-white/60 md:text-xl lg:text-2xl">
          1937 – 2026
        </p>
      </div>
    </main>
  );
}
