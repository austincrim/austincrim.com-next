module.exports = {
    purge: ['./src/**/*.js'],
    darkMode: 'class',
    variants: {
        extend: {
            translate: ['group-hover', 'active'],
            boxShadow: ['active']
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
