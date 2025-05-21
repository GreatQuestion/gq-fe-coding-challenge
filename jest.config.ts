import 'ts-node/register';
import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-fixed-jsdom',
  transform: {
    '^.+\\.(tsx?|jsx?)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  }
};

export default config;