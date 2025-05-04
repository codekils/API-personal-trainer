FROM node:latest

WORKDIR /src

COPY . .

RUN rm -rf node_modules

RUN npm i 

CMD ["node", "./src/server.js"]