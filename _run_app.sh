#/usr/bin/sh

if [ "$NODE_ENV" == "development" ]; then
  yarn dev
elif [ "$NODE_ENV" == "production" ]; then
  yarn prod
fi
