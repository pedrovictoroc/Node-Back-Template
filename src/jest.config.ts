import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
export default config;