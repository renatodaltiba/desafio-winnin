module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@types(.*)$": "<rootDir>/src/types$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/jest.setup.ts",
    "jest-styled-components",
  ],
};
