export default {
    roots: ['src'], // Use browser-like testing environment
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // That one tells Jest to use ts-jest when dealing with TypeScript files
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
}
