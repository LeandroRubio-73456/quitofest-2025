/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        ...['amarillo', 'naranja', 'rosa', 'verde'].flatMap(color => [
            `bg-${color}`,
            `border-${color}`,
            `hover:bg-${color}-oscuro`,
            `active:bg-${color}-claro`,
            `focus:outline-${color}-oscuro`,
            `bg-${color}-transparente`,
            `border-${color}-transparente`,
            `bg-${color}-oscuro`,
        ]),
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
