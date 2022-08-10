import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import { version } from './package.json'
const banner =
  '/*!\n' +
  ` * Build Time: ${new Date().toISOString()}\n` +
  ` * Toolsbox.js v${version}\n` +
  ` * (c) 2014-${new Date().getFullYear()} chenym1992\n` +
  ' * Released under the MIT License.\n' +
  ' */'

export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/toolsbox.esm.js',
        format: 'esm',
        banner
      },
      {
        file: 'dist/toolsbox.common.js',
        format: 'cjs',
        banner
      },
      {
        file: 'dist/toolsbox.min.js',
        format: 'umd',
        banner,
        name: 'Toolsbox',
        plugins: [terser()]
      }
    ],
    plugins: [typescript()],
    watch: {
      exclude: 'node_modules/**'
    }
  },
  {
    input: './src/index.ts',
    output: [{ file: 'types/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
])
