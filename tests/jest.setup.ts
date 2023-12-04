import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    replace: jest.fn()
  })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn()
  })),
  usePathname: jest.fn()
}))
