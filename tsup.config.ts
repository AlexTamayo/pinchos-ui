import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: [
    'react',
    'react-dom',
    'styled-components',
    'react-redux',
    'react-hook-form'
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
    options.alias = {
      '@': '/src'
    };
  },
  loader: {
    '.js': 'jsx',
  },
}); 