/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'teal': '#3C4D58',
            'teal-light': '#A4C1C6',
            'teal-hover': '#BFC2BC',
            'purple': '#6e4b6c',
            'purple-hover': '#DDD2CF',
            'white': '#f9f5e8',
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

