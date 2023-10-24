'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useQueryState(key: string, defaultValue: string = '') {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [value, setValue] = useState(searchParams.get(key) ?? defaultValue)

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString())

    newParams.set(key, value)

    if (!value) newParams.delete(key)

    router.replace(`${pathname}?${newParams.toString()}`)
  }, [key, value])

  return [value, setValue] as const
}
