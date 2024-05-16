module.exports = {
    // Indicates that Jest should use the jsdom environment provided by JSDOM to simulate a browser-like environment
    testEnvironment: 'jsdom',
  
    // An array of file extensions that tests use
    moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'mjs'],
  
    // The glob patterns Jest uses to detect test files
    testMatch: ['./**/*.test.{js,jsx}'],
  
    // A list of paths to modules that run some code to configure or set up the testing environment before each test
    setupFilesAfterEnv: ['./jest.setup.js'],
    //setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom/extend-expect'],
  
    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mocking CSS imports
    },
    
    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    snapshotSerializers: ['@emotion/jest/serializer'],

    // Transform JS files using babel-jest
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '\\.(png|mp4|jpg|jpeg|gif|svg|ico|webp)$': 'jest-transform-stub',
    },
  };
  