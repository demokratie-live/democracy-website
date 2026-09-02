import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/__tests__/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'tests/**/*'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'src/__tests__/setup.ts',
        '**/*.d.ts',
        'src/payload-types.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@payload-config': path.resolve(__dirname, './src/payload.config.ts'),
    },
  },
});
