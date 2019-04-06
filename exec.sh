#!/usr/bin/env bash

docker build --rm -t arjay-codes-client .
docker run -p 8080:8080 --pid=host arjay-codes-client