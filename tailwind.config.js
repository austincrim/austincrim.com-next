const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.js'],
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
