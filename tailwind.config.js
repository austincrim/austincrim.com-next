module.exports = {
    purge: ['./src/**/*.js'],
    variants: {
        extend: {
            translate: ['group-hover', 'active'],
            boxShadow: ['active']
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
