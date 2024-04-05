#!/bin/bash
chmod 400 ./keys/replica.key
username=${USER} password=${PASSWORD} docker-compose up -d
sleep 50
docker-compose stop mongotmp remover