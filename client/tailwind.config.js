module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter','system-ui','sans-serif']
      },
      colors: {
        brandDark: '#0f1115',
        brandGreen: '#12775f',
        brandGold: '#d9b16f'
      },
      boxShadow: {
        'premium-lg': '0 24px 80px rgba(2,6,23,0.75)'
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(180deg, rgba(2,6,23,0.18), rgba(2,6,23,0.65))'
      }
    }
  },
  plugins: []
};
