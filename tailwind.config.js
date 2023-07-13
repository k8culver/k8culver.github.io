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
            'purple': '#6E4B5A',
            'purple-hover': '#CFC1BD',
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
            }
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
}

