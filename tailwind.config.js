const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        // "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
            },
        },
        // container: {
        //     center: true,
        // },
        // padding: {
        //     DEFAULT: "2rem",
        //     sm: "2rem",
        //     lg: "4rem",
        //     xl: "5rem",
        //     "2xl": "6rem",
        // },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("tw-elements/dist/plugin"),
    ],
};
