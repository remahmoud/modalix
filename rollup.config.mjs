import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import pkg from './package.json' assert { type: 'json' }

export default [
    // CommonJS
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: [
                    '**/example',
                    '**/*.example.{ts,tsx}',
                    '**/__tests__',
                    '**/*.test.{ts,tsx}',
                ],
            }),
            terser(),
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
]
