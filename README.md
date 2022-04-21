# Image-Gallery-App

I created this app part of a technical task in an internship interview.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisite

This app uses the Flickr API services. To run this app on your own, you need to sign up for Flickr and request an API key [here](https://www.flickr.com/services/apps/create/).

### Running this app locally

1. Download or clone this code repository to a location in your pc.
2. Create a `.env` file in the root folder, and put in the following:

   ```text
   HTTPS=true   # true to run local server in https mode.
   PORT=3800    # port number for the local server to listen on.
   REACT_APP_FLICKR_API_KEY=<YOUR FLICKR API KEY HERE>
   ```

   For more info on the `.env` file and the environment variables, visit the following pages on create-react-app site:

   - [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
   - [Advanced Configuration](https://create-react-app.dev/docs/advanced-configuration/).

3. Run `npm install` to install the dependencies.
4. Run `npm run start` to start the app in local server.

Runs the app in the development mode.<br />
Open [http://localhost:3800](http://localhost:3800) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
