# GraphQL Server
It uses [Apollo Server](https://www.apollographql.com/docs/apollo-server/) for our GraphQL Server backend.
Our GraphQL Server backend contains graph apis consumed by the frontends. It is deployed to AWS Lambda.

# GitHub branches
We've two branches to work with. While developing you have to push your changes to a new feature branch or push your changes to the existing **dev** branch.
In both cases you have to open a PR and request a review from a team mate.

You must read the section *AWS Lambda build* for further assistance of deployments.

# Update outdated packages
```
yarn outdated
yarn upgrade
```

# GraphQL Server local development set up
## Signing a cert for local https
Apollo GraphQL Server gives a [local https](https://www.apollographql.com/docs/apollo-server/security/terminating-ssl/) server to you. You have to follow our guide to get a new SSL certificate because our frontends only work with SSL.

### GraphQL Server certificate guide
You have to open a new terminal and go to *graphql-server* folder before you execute the SSL script below.

```
openssl req -x509 -out server.crt -keyout server.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

#### Import newly created certificate into Keychain to trust them
```
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ./server.crt
```

#### Create newly created certificate in pkcs12 format
```
openssl pkcs12 -export -out server.p12 -inkey server.key -in server.crt
```
> You don't have to add an export password.

#### Safari and Chrome
You have to import our certificate into the Keychain to trust them using the script above in section *Import newly created certificate into Keychain to trust them*.

#### Firefox
You have to configure Firefox to accept our certificate.
1. Open a new Firefox
2. Import certificate of pkcs12 format at about:preferences#privacy
3. Go to about:config in address bar
4. Activate setting security.enterprise_roots.enabled if set to false

## GraphQL Server config
You must put the config into graphql-server/.env file.
```
REGION=local
API_KEY=xxxxx
API_SECRET=xxxxxx
API_URL=http://localhost:8000
HUBSPOT_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### GraphQL Client config
[localhost:4000/graphql](http://localhost:4000/graphql)
> Only https protocol to access the GraphQL Server.

## Yarn CLI
You have to execute GraphQL Server through Yarn-Scripts.
```
# Start GraphQL Server locally
cd graphql-server
yarn watch
```

### More from yarn
```
yarn lint
yarn test
```

# How to build more custom data sources that interact with our GraphQL Server
https://www.apollographql.com/docs/apollo-server/data/data-sources/

# Local instance of DynamoDB
You can benefit from starting DynamoDB locally on your computer. It deploys to
build/DynamoDB. You must download latest Java SDK and you are good to go.
```
cd graphql-server
./DynamoDB-Local.zsh
```

## Configure a local instance of DynamoDB
```
aws configure
```

> AWS Access Key ID [None]: ku138
> AWS Secret Access Key [None]: q6lmcc
> Default region name [None]: local
> Default output format [None]:

## Using AWS CLI with DynamoDB
```
aws dynamodb list-tables --endpoint-url http://localhost:8000
```

## Access local ui of DynamoDB
http://localhost:8000/shell/

# Obtaining AWS credentials
You must login to your AWS user account and obtain a personal **access key** and **secret access key** from IAM service.

### Install a user profile on macOS
```
vim ~/.aws/credentials

[art-discovery]
aws_access_key_id=<access key>
aws_secret_access_key=<secret access key>
```
> It is very important to name this config "art-discovery".

# Useful links
[Using the AWS CLI](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.CLI.html)
