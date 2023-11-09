/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'teal': '#183b50',
            'teal-light': '#8accdc',
            'purple': '#6e2151',
            'purple-hover': '#f7e5f0',
            'white': '#e5f3f7',
            'black': '#2f2b2a',
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
            }
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
}

