module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      content: [
        "./src/**/*.{hmtl,js}",
        "./public/index.html",
      ],
      theme: {
        extend: {
          colors: {
            'primary': '#ffcc00', // Yellow
          },
        },
      },
      plugins: [],
    }
}