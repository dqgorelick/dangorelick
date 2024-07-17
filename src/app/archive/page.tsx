import Image from "next/image";

export default function Archive() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Archive</h2>
        <Image
          src="/images/dan_derrek_club_code.jpeg"
          alt=""
          width={1000}
          height={1000}
          priority
        />
      </div>
    </main>
  );
}
