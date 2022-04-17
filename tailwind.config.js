

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {  
        maxWidth: "100rem", 
      },
      maxWidth: {
        '9xl': '126rem',
        '8xl': '120rem',
        '7xl': '100rem',
      },
      height: {
        '128': '32rem',
      },
      screens: {
        'mobile' : '340px'
      },
      minWidth: {
        '8px': '80px',
      },
      colors: {
        'dark-primary': '#2a2a2a',
      },
      backgroundImage: {
        'about-pattern': "url('https://images7.alphacoders.com/114/thumbbig-1145723.webp')",
      },
      padding : {
        '104': '26rem',
      },
    },
  },
  plugins: [],
}