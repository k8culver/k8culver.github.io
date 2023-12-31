/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'teal': '#2A798B',
            'teal-dark': '#2D5159',
            'teal-darker': '#133840',
            'teal-light': '#AAE5F2',
            'purple': '#8C2A50',
            'purple-hover': '#eec7d6',
            'gold': '#b97438',
            'white': '#f4fafc',
            'black': '#233437',
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Bitter', 'serif'],
        },
        extend: {
            height: {
                '30': '7.5rem',
                '50': '12.5rem',
            },
            width: {
                '30': '7.5rem',
                '50': '12.5rem',
            },
            gridTemplateColumns: {
                'smallcenter': 'auto 0.25rem auto',
            },
            borderWidth: {
                '12': '12px',
                '16': '16px',
            },
            boxShadow: {
                'border': '0px 0px 0px 2px black inset',
                'border-thick': '0px 0px 0px 4px black inset',
                'border-outer': '0px 0px 0px 2px black',
                'inner-top-bottom': '0px 20px 20px black inset, 0px -20px 20px black inset',
            }
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
}

