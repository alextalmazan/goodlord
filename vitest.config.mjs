/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        testTimeout: 40000,
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setupTests.ts',
        coverage: {
            all: true,
            include: ['**/src/**'],
        },
    },
});
