import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';

const path = require("path");

function PathAlias() {
    const customResolver = resolve({
        extensions: ['.mjs', '.js', '.jsx', '.json', '.config.js', '.config.json']
    });
    const ProjectRootDir = path.resolve(__dirname);
    const AppDir = path.resolve(ProjectRootDir, 'app');

    const Alias = alias({
        entries: [
            {
                find: '@',
                replacement: AppDir
            },
            {
                find: "@Modules",
                replacement: path.resolve(AppDir, 'Modules')
            },
            {
                find: "@Config",
                replacement: path.resolve(AppDir, 'Config')
            }
        ],
        customResolver
    });

    return Alias;
}

export default {
    input: 'server.js',
    output: {
        sourcemap: true,
        format: 'cjs',
        name: 'app',
        file: 'build/server.js',
        exports: "auto",
    },
    plugins: [
        commonjs({
            transformMixedEsModules: true,
        }),
        PathAlias(),
    ],
    watch: {
        clearScreen: false
    },
}