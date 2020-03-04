FROM buildpack-deps:stretch

RUN mkdir /breuninger
COPY .

CMD [ "node app" ]
