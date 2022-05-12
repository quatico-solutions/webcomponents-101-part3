module.exports = {
    preset: "ts-jest",
    collectCoverageFrom: ["src/**/*.ts"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["index.ts", "test/*"],
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.test.json",
        },
    },
    moduleFileExtensions: ["ts", "js", "json", "node"],
    modulePathIgnorePatterns: ["<rootDir>/target/"],
    testRegex: ".*spec\\.(js|ts)$",
    testEnvironmentOptions: {
        url: "http://localhost/",
    },
    transform: {
        "^.+\\.(js|ts)$": "ts-jest",
    },
    resetMocks: true,
};
