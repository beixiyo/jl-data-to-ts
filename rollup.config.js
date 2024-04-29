import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import clear from 'rollup-plugin-clear'
import { fileURLToPath } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-polyfill-node'


export default defineConfig({
    input: './src/index.ts',
    output: [
        outputFormat('dist/index.cjs', 'cjs'),
        outputFormat('dist/index.js', 'es'),
        outputFormat('dist/index.browser.js', 'iife', '_jtt'),
    ],
    plugins: [
        nodeResolve(),  // 开启`node_modules`查找模块功能
        nodePolyfills(),
        commonjs(),
        terser(),
        typescript(),
        clear({
            targets: ['dist'],
            watch: true,
        }),

        alias({
            entries: [
                {
                    find: '@',
                    replacement: fileURLToPath(
                        new URL('src', import.meta.url)
                    )
                },
            ]
        }),
    ],
})


/**
 * @param {string} file 文件路径
 * @param {'amd' | 'cjs' | 'commonjs' | 'es' | 'esm' | 'iife' | 'module' | 'system' | 'systemjs' | 'umd'} format 打包格式
 * @param {string} name 全部暴露对象名称
 * @returns 格式化打包对象
 */
function outputFormat(file, format, name) {
    return {
        file, format, name
    }
}
