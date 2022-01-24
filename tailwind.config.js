module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'table-xs': '1.4fr 0.8fr 0.8fr',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
