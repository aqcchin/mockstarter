FROM node:10

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install

EXPOSE 3002

CMD npm start