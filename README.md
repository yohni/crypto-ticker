# About Crytick

The main idea of the project is to show the users the charts of cryptocurrencies which always updated every 2s. The charts will updated and sorted by the market cap value which always change every 2s. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The styles was using [daisyui](https://daisyui.com/) that customed by tailwindcss.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run storybook`

Open the storybook locally.

## Problems that faced
There are some problems that I faced
- The api from binance has an issue with logo of the assets. To handle it I create Avatar component which provides a character and random background color when the image url was broken.
- I am not really understanding the api documentation to calculate the market cap with my own formula. I need the market cap to sort the list of the assets every 2s.
