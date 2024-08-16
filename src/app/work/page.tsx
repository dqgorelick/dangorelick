import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Work</h2>
        <Link href="/work/atc/">
          <p>ATC Listening Station</p>
          <Image
            src="/images/atc/new_museum_activation_00.jpg"
            alt=""
            width={500}
            height={500}
            priority
          />
        </Link>
        <Link href="/work/terrestrial-collapse/">
          <p>Elegy for a Terrestrial Collapse </p>
          <Image
            src="/images/terrestrial/terrestrial_collapse_harvestworks.jpg"
            alt=""
            width={500}
            height={500}
            priority
          />
        </Link>
      </div>
    </main>
  );
}
