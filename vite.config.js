
const { resolve } = require('path');

export default {
    // config options
    root: './src',
    base: 'http://project.madurado.tech/tailwind/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about.html'),
                contact: resolve(__dirname, 'src/contact.html'),
            }
        },
        outDir: '../dist'
    },
}
