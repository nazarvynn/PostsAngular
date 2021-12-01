module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{html,ts}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                'main-layout': '200px auto',
            },
            gridTemplateRows: {
                'main-layout': '40px minmax(160px, auto) 40px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
