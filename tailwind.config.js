/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3534FF',       // Custom primary color
          secondary: '#575656',     // Custom secondary color
          accent: '#000000',        // Custom accent color
          foreground: '#171717',    // Custom text color
        },
        fontFamily: {
          sans: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  