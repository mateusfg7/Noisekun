import { Suspense } from "react";

import { Home } from "~/components/home";

// The page reads the shared-combo query string, so it renders on the client.
export default function Page() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
