import { useSyncExternalStore } from "react";

// Nothing to subscribe to: the value only flips once, on hydration.
const unsubscribe = () => null;
const subscribe = () => unsubscribe;

/**
 * `false` during SSR and hydration, `true` afterwards.
 *
 * Use it to gate values that only exist in the browser (localStorage,
 * persisted zustand stores) so the first client render matches the server
 * HTML, without a `useEffect(() => setMounted(true))` round trip.
 */
export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
