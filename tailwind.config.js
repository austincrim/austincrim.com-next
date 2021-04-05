function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    variants: {},
    theme: {
        extend: {
            backgroundColor: {
                base: withOpacity('--color-base'),
                'off-base': withOpacity('--color-off-base'),
                primary: withOpacity('--color-primary'),
                secondary: withOpacity('--color-secondary'),
            },
            textColor: {
                base: withOpacity('--color-text-base'),
                muted: withOpacity('--color-text-muted'),
                'muted-hover': withOpacity('--color-text-muted-hover'),
                primary: withOpacity('--color-primary'),
                secondary: withOpacity('--color-secondary'),
            },
            typography: (theme) => ({
                theme: {
                    css: [
                        {
                            color: 'var(--color-text-base)',
                            'font-weight': 100,
                            'font-family': 'Inter, sans-serif',
                            '[class~="lead"]': {
                                color: 'var(color-text-muted)',
                            },
                            a: {
                                color: 'var(--color-text-base)',
                            },
                            strong: {
                                color: 'var(--color-text-base)',
                            },
                            'ol > li::before': {
                                color: 'var(--color-text-muted)',
                            },
                            'ul > li::before': {
                                backgroundColor: theme('colors.gray.600'),
                            },
                            hr: {
                                borderColor: 'var(--color-text-muted)',
                            },
                            blockquote: {
                                color: 'var(--color-text-muted)',
                                borderLeftColor: theme('colors.gray.600'),
                            },
                            h1: {
                                color: 'var(--color-text-base)',
                            },
                            h2: {
                                color: 'var(--color-text-base)',
                            },
                            h3: {
                                color: 'var(--color-text-base)',
                            },
                            h4: {
                                color: 'var(--color-text-base)',
                            },
                            'figure figcaption': {
                                color: 'var(--color-text-muted)',
                            },
                            code: {
                                color: 'var(--color-text-base)',
                            },
                            'a code': {
                                color: 'var(--color-text-base)',
                            },
                            pre: {
                                color: 'var(--color-text-muted)',
                                backgroundColor: 'var(--color-off-base)',
                            },
                            thead: {
                                color: 'var(--color-text-base)',
                                borderBottomColor: 'var(--color-text-muted)',
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
