# Welcome to my showcase

# UI
The folder "ui" contains the frontend of an art discovery platform.
You can start the frontend by typing in:
```
cd ui
yarn start
```

> It is only built for mobile devices.

## UI config
You can disable browser hot-reload by adding BROWSER=none either
to an .env file or in front of `yarn watch`.

### GraphQL Client config
```
REACT_APP_QUERY_URL=https://localhost:4000/graphql
```

> You will find a more detailed documentation about the backend [here](https://github.com/andreasreuter/showcase/blob/master/graphql-server/readme.md).

#### Storybook + Styleguidist
```
yarn sb
yarn build-sb
yarn sg
yarn build-sg
```

## New SSL cert with LetsEncrypt
```
sudo certbot certonly --manual --preferred-challenges dns
```
> A SSL cert expires after 89 days.

## Activate auto renewal of SSL cert
```
crontab -e
0 12 * * * /usr/bin/certbot renew --quiet
```

## Deploy
### UI
```
cd ui

yarn build
sudo rm -fR /usr/share/nginx/html/*
sudo cp -R build/* /usr/share/nginx/html/

sudo service nginx start
```
