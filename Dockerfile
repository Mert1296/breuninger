FROM buildpack-deps:stretch

COPY app.js .

CMD [ "node app" ]
