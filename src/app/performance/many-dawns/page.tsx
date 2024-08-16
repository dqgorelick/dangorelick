import Image from "next/image";
import Link from "next/link";

export default function Performance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Many Dawns</h2>
        <Image
          src="/images/many_dawns/zerospace_many_dawns_00.jpg"
          alt=""
          width={800}
          height={800}
          priority
        />
        <Image
          src="/images/many_dawns/zerospace_many_dawns_02.jpg"
          alt=""
          width={800}
          height={800}
          priority
        />
        <Image
          src="/images/many_dawns/zerospace_many_dawns_03.jpg"
          alt=""
          width={800}
          height={800}
          priority
        />
        <Image
          src="/images/many_dawns/zerospace_many_dawns_04.jpg"
          alt=""
          width={800}
          height={800}
          priority
        />
        <Image
          src="/images/many_dawns/zerospace_many_dawns_05.jpg"
          alt=""
          width={800}
          height={800}
          priority
        />
        <Image
          src="/images/many_dawns/zerospace_many_dawns_01.jpg"
          alt=""
          width={800}
          height={800}
          priority
        />
        <Image
          src="/images/many_dawns/gray_area_hexcode_00.jpg"
          alt=""
          width={800}
          height={800}
          priority
        />
      </div>
    </main>
  );
}
