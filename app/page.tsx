import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-dvh w-dvw items-center justify-center bg-black">
      <Image
        src="/kong-harald.webp"
        alt="Kong Harald"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />

      <div className="pointer-events-none absolute inset-y-0 right-10 flex flex-col items-start justify-center gap-4 md:right-16 lg:right-24">
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
