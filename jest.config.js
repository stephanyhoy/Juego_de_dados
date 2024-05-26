module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ["./dist"],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    },
    testMatch: [
      '**/__tests__/**/*.test.ts',
      '**/*.spec.ts'
    ],
    moduleFileExtensions: ['ts', 'js', 'json', 'node']
  };
  