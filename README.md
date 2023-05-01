# Sail User Portal

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build_image`

Build the docker image for the app.

### `npm run push_image`

Push the docker image to the SAIL registry.

## Run the app in docker

```
REACT_APP_SAIL_API_SERVICE_URL=https://172.20.100.8:8000
REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL=https://172.20.100.9:8000
docker run -it -v $(pwd)/certs:/etc/nginx/certs -p 3000:3001 --env REACT_APP_SAIL_API_SERVICE_URL=$REACT_APP_SAIL_API_SERVICE_URL --env REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL=$REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL userportal
```
Note: Update the REACT_APP_SAIL_API_SERVICE_URL and REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL to the correct values for your deployment.

# Run app without docker
```
REACT_APP_SAIL_API_SERVICE_URL=http://127.0.0.1:8000
REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL=http://127.0.0.1:9000
REACT_APP_SAIL_API_SERVICE_URL=$REACT_APP_SAIL_API_SERVICE_URL REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL=$REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL npm start
