module.exports = {
    purge: ['./src/**/*.js'],
    darkMode: 'class',
    variants: {
        extend: {
            translate: ['group-hover', 'hover', 'active'],
            boxShadow: ['active'],
            typography: ['dark']
        },
    },
    theme: {
        extend: {
            typography: (theme) => ({
                light: {
                    css: [
                        {
                            color: theme('colors.gray.200'),
                            '[class~="lead"]': {
                                color: theme('colors.gray.300'),
                            },
                            a: {
                                color: theme('colors.white'),
                            },
                            strong: {
                                color: theme('colors.white'),
                            },
                            'ol > li::before': {
                                color: theme('colors.gray.200'),
                            },
                            'ul > li::before': {
                                backgroundColor: theme('colors.gray.600'),
                            },
                            hr: {
                                borderColor: theme('colors.gray.200'),
                            },
                            blockquote: {
                                color: theme('colors.gray.200'),
                                borderLeftColor: theme('colors.gray.600'),
                            },
                            h1: {
                                color: theme('colors.white'),
                            },
                            h2: {
                                color: theme('colors.white'),
                            },
                            h3: {
                                color: theme('colors.white'),
                            },
                            h4: {
                                color: theme('colors.white'),
                            },
                            'figure figcaption': {
                                color: theme('colors.gray.200'),
                            },
                            code: {
                                color: theme('colors.white'),
                            },
                            'a code': {
                                color: theme('colors.white'),
                            },
                            pre: {
                                color: theme('colors.gray.200'),
                                backgroundColor: theme('colors.gray.800'),
                            },
                            thead: {
                                color: theme('colors.white'),
                                borderBottomColor: theme('colors.gray.200'),
                            },
                            'tbody tr': {
                                borderBottomColor: theme('colors.gray.600'),
                            },
                        },
                    ],
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
