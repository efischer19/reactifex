#!/bin/bash
curl -L -w "\n" --user $SECRET_USER:$SECRET_PWD -X PUT -H "Content-Type: application/json" --data "{\"comment\": \"It's a message, for testing\"}" $112345deadbeef
curl -L -w "\n" --user $SECRET_USER:$SECRET_PWD -X PUT -H "Content-Type: application/json" --data "{\"comment\": \"Also a message for testing\"}" $18badf00d
curl -L -w "\n" --user $SECRET_USER:$SECRET_PWD -X PUT -H "Content-Type: application/json" --data "{\"comment\": \"It's a message, for testing\"}" $1bada55
curl -L -w "\n" --user $SECRET_USER:$SECRET_PWD -X PUT -H "Content-Type: application/json" --data "{\"comment\": \"Also a message for testing\"}" $1feedface9876
