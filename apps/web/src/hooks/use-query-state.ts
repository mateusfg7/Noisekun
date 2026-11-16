"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export function useQueryState(key: string, defaultValue = "") {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [value, setValue] = useState(searchParams.get(key) ?? defaultValue);

  // Write to the URL from the setter rather than from an effect: an effect
  // would need `searchParams` as a dependency, and `router.replace` hands back
  // a new `searchParams`, so it would re-run in a loop.
  const setQueryValue = useCallback(
    (newValue: string) => {
      if (newValue === value) {
        return;
      }

      setValue(newValue);

      const newParams = new URLSearchParams(searchParams.toString());

      if (newValue) {
        newParams.set(key, newValue);
      } else {
        newParams.delete(key);
      }

      router.replace(`${pathname}?${newParams.toString()}`);
    },
    [key, value, pathname, router, searchParams]
  );

  return [value, setQueryValue] as const;
}
