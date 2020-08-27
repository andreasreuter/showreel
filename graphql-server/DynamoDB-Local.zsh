#!/usr/bin/env zsh

BUILD="./tmp/DynamoDB"

if [ -d $BUILD ]; then
  cd ./tmp
  rm -R ./DynamoDB
  cd ..
fi

mkdir -p $BUILD
cd $BUILD
curl -#O https://s3-us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.zip
unzip dynamodb_local_latest.zip
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
