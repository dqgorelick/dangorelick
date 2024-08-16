import Image from "next/image";
import Link from "next/link";

export default function Performance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Performance practice</h2>
        <Link href="/performance/livecode/">
          <p>Livecode</p>
        </Link>
        <Link href="/performance/many-dawns/">
          <p>Many Dawns</p>
        </Link>
        <Link href="/performance/harmonic-essence/">
          <p>Harmonic Essence</p>
        </Link>
        <Link href="/performance/mitigation/">
          <p>Mitigation</p>
        </Link>
        <p>Contact Improv</p>
      </div>
    </main>
  );
}
