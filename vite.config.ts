/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        browser: {
            enabled: true,
            instances: [{ browser: 'chromium' }]
        }
    }
});
