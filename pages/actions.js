import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  handleTurnOnAll,
  handleTurnOffAll,
  isOnCount,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        handleTurnOnAll={handleTurnOnAll}
        handleTurnOffAll={handleTurnOffAll}
        isOnCount={isOnCount}
      />
    </>
  );
}
