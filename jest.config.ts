import { createDefaultPreset } from "ts-jest";

export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  transform: {
    ...createDefaultPreset().transform,
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": "<rootDir>/__mocks__/styleMock.js",
  },
};
