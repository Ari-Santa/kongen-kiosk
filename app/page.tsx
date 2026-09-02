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
        <p className="text-3xl font-light tracking-[0.35em] text-white/90 md:text-4xl lg:text-5xl">
          KONG
        </p>
        <span className="h-px w-16 bg-white/30" />
        <p className="text-3xl font-light tracking-[0.35em] text-white/90 md:text-4xl lg:text-5xl">
          HARALD
        </p>
      </div>
    </main>
  );
}
