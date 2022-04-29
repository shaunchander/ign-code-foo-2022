module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    theme: {
        extend: {
            screens: {
                sm: '400px'
            },
            outline: {
                none: '0'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/forms')]
}
