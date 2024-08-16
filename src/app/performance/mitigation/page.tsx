import Image from "next/image";
import Link from "next/link";

export default function Performance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Mitigation</h2>
        <Image
          src="/images/mitigation/dan_derrek_club_code_00.jpeg"
          alt=""
          width={800}
          height={800}
          priority
        />
        <Image
          src="/images/mitigation/dan_derrek_club_code_01.jpeg"
          alt=""
          width={800}
          height={800}
          priority
        />
      </div>
    </main>
  );
}
