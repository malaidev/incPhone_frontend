module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    // enable dark mode via class strategy
    darkMode: "class",

    theme: {
        extend: {
            screens: {
                // sm: '480px',
                // md: '768px',
                // lg: '976px',
                // xl: '1440px',
            },
            fontFamily: {
                // sans: ['Graphik', 'sans-serif'],
                // serif: ['Merriweather', 'serif'],
            },
            colors: {
                white: "#ffffff",
                black: "#09090c",
                primary: "#A27AFF",

                brightRed: "hsl(12, 88%, 59%)",
                brightRedLight: "hsl(12, 88%, 69%)",
                brightRedSupLight: "hsl(12, 88%, 95%)",

                darkBlue: "hsl(228, 39%, 23%)",
                darkGrayishBlue: "hsl(227, 12%, 61%)",
                veryDarkBlue: "hsl(233, 12%, 13%)",

                /////////////////////HP//////////////////////
                darkBack: '#1a1925',
                darkSidebarBack: '#1d1d2a',
                darkGrayText: '#9797B2',
                cgray: '#f3f3f5',
                hoverGray: '#e9e9ed',
                darkGray: '#252434',
                darkHoverGray: '#2d2d40',
            },
        },
    },
    plugins: []
}