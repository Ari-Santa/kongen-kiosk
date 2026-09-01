import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-dvh w-dvw items-center justify-center bg-black">
      <Image
        src="/kong-harald.jpg"
        alt="Kong Harald"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 pb-10">
        <p className="text-2xl font-light tracking-[0.35em] text-white/90 sm:text-3xl md:text-4xl">
          KONG HARALD
        </p>
        <span className="h-px w-24 bg-white/30" />
      </div>

      <a
        href="https://commons.wikimedia.org/wiki/File:King_Harald_V_of_Norway_(29741494632)_(cropped).jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-3 text-[10px] text-white/30 hover:text-white/60"
      >
        Foto: Estonian Foreign Ministry, CC BY 2.0
      </a>
    </main>
  );
}
