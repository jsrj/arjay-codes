docker build --rm -t arjay-codes-client .
docker run -p 3000:3000 --pid=host arjay-codes-client