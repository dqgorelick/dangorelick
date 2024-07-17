import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image
        src="/images/dan_derrek_club_code.jpeg"
        alt=""
        width={1000}
        height={1000}
        priority
      />
    </main>
  );
}
