FROM buildpack-deps:stretch

RUN git clone https://github.com/Mert1296/breuninger /breuninger
CMD [ "node app" ]
