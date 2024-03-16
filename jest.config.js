module.exports = {
  clearMocks: true,
  roots: ["<rootDir>"],
  collectCoverage: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: [
    "node_modules",
    __dirname, // the root directory
  ],
  globals: {
    DEV: true,
  },
  coverageDirectory: "coverage",

  coverageProvider: "v8",

  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironmentOptions: {
    browsers: ["chrome", "firefox", "safari"],
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,__tests__}.{js,jsx,ts,tsx}",
  ],
  reporters: ["default", "jest-junit"],
};
