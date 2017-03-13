FROM node:alpine

RUN apk update && apk add --no-cache bash gawk sed grep bc coreutils \
    python python-dev py-pip build-base openssh

RUN npm cache clean

COPY ./api/package.json /var/app/package.json

WORKDIR /var/app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]