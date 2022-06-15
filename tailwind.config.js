const colors = require('tailwindcss/colors')


module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'watchlist-hover': '#D1D7DC',
                blueGray: colors.slate,
                coolGray: colors.gray,
                trueGray: colors.neutral,
                warmGray: colors.stone,
                orange: colors.orange,
                amber: colors.amber,
                lime: colors.lime,
                esmerald: colors.esmerald,
                teal: colors.teal,
                cyan: colors.cyan,
                sky: colors.sky,
                violet: colors.violet,
                fuchsia: colors.fuchsia,
                pink: colors.pink,
                rose: colors.rose
            }
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        }
    },
    variants: {
        extend: {
            display: ['group-hover'],
            transform: ['group-hover'],
            scale: ['group-hover'],
            textOpacity: ['dark'],
            outline: ['responsive', 'focus', 'hover', 'active'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}