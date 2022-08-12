const { rollup } = require('rollup')
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve').default
const babel = require('@rollup/plugin-babel').default
const dts = require('rollup-plugin-dts').default
const { terser } = require('rollup-plugin-terser')
const { version } = require('../package.json')
const standardVersion = require('standard-version')
const shell = require('shelljs')

const extensions = ['.js', '.ts']

const banner =
  '/*!\n' +
  ` * Toolsbox.js v${version}\n` +
  ` * (c) 2014-${new Date().getFullYear()} chenym1992\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const build = async () => {
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

  await rollup({
    input: './src/index.ts',
    output: [{ file: 'types/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  })

  if (shell.exec('git commit -am "chore: build dist types"').code !== 0) {
    shell.echo('Error: Git commit failed')
    shell.exit(1)
  }

  standardVersion({
    noVerify: true,
    infile: 'CHANGELOG.md',
    silent: true,
    changelogHeader: '# fe-toolsbox'
  })
    .then(() => {
      shell.echo(`release success`)
    })
    .catch(err => {
      shell.echo(`standard-version failed with message: ${err.message}`)
      shell.exit(1)
    })
}

build()
