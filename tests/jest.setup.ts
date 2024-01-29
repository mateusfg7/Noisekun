import '@testing-library/jest-dom'

// const testCache = (func: any) => func

// jest.mock('react', () => {
//   const originalModule = jest.requireActual('react')
//   return {
//     ...originalModule,
//     cache: testCache
//   }
// })

// jest.mock('next/router', () => ({
//   useRouter: jest.fn().mockImplementation(() => ({
//     locale: 'en',
//     defaultLocale: 'en',
//     locales: ['en']
//   }))
// }))

jest.mock('next/navigation', () => ({
  // ...jest.requireActual('next/navigation'),
  // useParams: jest.fn().mockReturnValue({
  //   locale: 'en'
  // }),
  useRouter: jest.fn(() => ({
    replace: jest.fn()
  })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn()
  })),
  usePathname: jest.fn()
}))

// jest.mock('next/headers', () => ({
//   headers: jest.fn().mockReturnValue(
//     new Headers({
//       'x-next-locale': 'en'
//     })
//   )
// }))

// jest.mock('../src/i18n/server', () => ({
//   getI18n: jest.fn().mockImplementation(() => jest.fn())
// }))

// jest.mock('../src/i18n/client', () => ({
//   useI18n: jest.fn().mockImplementation(() => jest.fn())
// }))

// jest.mock('../src/i18n/client', () => ({
//   useI18n: jest.fn(),
//   useScopedI18n: jest.fn(),
//   useChangeLocale: jest.fn(),
//   useCurrentLocale: jest.fn(() => 'en')
// }))

// @ts-expect-error
global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  disconnect() {}
}
