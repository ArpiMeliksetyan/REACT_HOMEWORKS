import { defineConfig } from 'cypress';

export default defineConfig({
    projectId: 'movie-project',
    scrollBehavior: 'center',
    video: false,
    e2e: {
        baseUrl: 'http://localhost:5174',
        testIsolation: true,
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    },
});
