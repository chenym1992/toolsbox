const { rollup } = require('rollup')
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve').default
const babel = require('@rollup/plugin-babel').default
const dts = require('rollup-plugin-dts').default
const { terser } = require('rollup-plugin-terser')
const { version } = require('../package.json')
const shell = require('shelljs')

const extensions = ['.js', '.ts']

const banner =
  '/*!\n' +
  ` * Toolsbox.js v${version}\n` +
  ` * (c) 2014-${new Date().getFullYear()} chenym1992\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const build = async () => {
  if (shell.exec('pnpm test').code !== 0) {
    shell.echo('Unit test faild')
    shell.exit(1)
  }
  const bundle = await rollup({
    input: './src/index.ts',
    plugins: [
      commonjs(),
      resolve({
        extensions
      }),
      babel({ babelHelpers: 'bundled', extensions })
    ]
  })
  await bundle.write({
    file: 'dist/toolsbox.esm.js',
    format: 'esm',
    banner
  })
  await bundle.write({
    file: 'dist/toolsbox.common.js',
    format: 'cjs',
    banner
  })
  await bundle.write({
    file: 'dist/toolsbox.min.js',
    format: 'umd',
    banner,
    name: 'Toolsbox',
    plugins: [terser()]
  })

  const types = await rollup({
    input: './src/index.ts',
    plugins: [dts()]
  })

  await types.write({ file: 'types/index.d.ts', format: 'esm' })
}

build()
