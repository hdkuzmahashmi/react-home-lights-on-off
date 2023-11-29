import Link from "../components/Link";

export default function HomePage({ lights, onlightCounts }) {
  return (
    <div>
      <h1>Home</h1>
      <p>
        {onlightCounts} light(s) are on {lights.length}
      </p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
