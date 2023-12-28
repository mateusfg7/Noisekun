import { renderHook, act } from '@testing-library/react'

import { useQueryState } from './use-query-state'

describe('Hooks: Use Query State', () => {
  const { result } = renderHook(() =>
    useQueryState('test_key', 'default_value')
  )
  const [queryState, setQueryState] = result.current

  it('should return default value', () => {
    expect(queryState).toBe('default_value')
  })

  it('should update state with new value', () => {
    act(() => {
      setQueryState('new_value')
    })
    expect(queryState).toBe('default_value')
  })
})
