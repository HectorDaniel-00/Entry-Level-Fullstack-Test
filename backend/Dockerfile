FROM node:18-alpine

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "ts-node-dev", "--respawn", "--loader", "ts-node/esm", "src/index.ts"]
    