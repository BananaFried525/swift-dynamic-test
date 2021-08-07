FROM node:alpine

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm","start" ]