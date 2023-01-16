FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx quasar build -m ssr

EXPOSE 3300

CMD ["node", "dist/ssr/index.js"]
