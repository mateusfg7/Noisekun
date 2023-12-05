import nextJest from 'next/jest'
import type { Config } from 'jest'

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig: Config = {
  rootDir: '../',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/@types/**/*.{ts,tsx}'
  ],
  testPathIgnorePatterns: ['node_modules', '\\.cache', '.next', 'coverage'],
  globals: {
    __DEV__: true
  }
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
export default createJestConfig(customJestConfig)
