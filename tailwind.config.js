/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'teal': '#3C4D58',
            'teal-light': '#A4C1C6',
            'purple': '#6E4B5A',
            'white': '#f9f5e8',
            'black': '#2f2b2a',
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Bitter', 'serif'],
        },
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
}

