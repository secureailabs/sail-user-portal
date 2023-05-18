#!/bin/bash
set -e

cd /app

# Start the nginx server
# nginx -g 'daemon off;' 2>&1 | tee /app/nginx.log &

# Start the react app
REACT_APP_SAIL_API_SERVICE_URL=$REACT_APP_SAIL_API_SERVICE_URL REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL=$REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL npm run start

# To keep the container running
tail -f /dev/null
