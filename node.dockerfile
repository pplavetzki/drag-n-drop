FROM node:alpine

RUN apk add --no-cache bash gawk sed grep bc coreutils \
    python python-dev py-pip build-base git openssh

RUN npm install -g angular-cli
RUN npm install -g webpack-dev-server
# RUN npm install -g webpack-dev-server && npm cache clean

COPY ./application/package.json /var/app/package.json
# RUN chown -R app:app /var/*

# USER app

WORKDIR /var/app

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]