import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/main.js',
    output: {
        name: 'VuePanZoom',
        exports: 'auto',
    },
    plugins: [
        vue({
            css: true,
            compileTemplate: true,
        }),
        buble(),
        commonjs(),
    ],
    external: ['panzoom']
};