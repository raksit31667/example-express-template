import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  roots: ["__tests__"],
  testEnvironment: 'node',
  setupFilesAfterEnv: ["./__tests__/jest.setup.ts"],
  testMatch: [ "**/__tests__/**/*.test.[jt]s?(x)" ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
}

export default config