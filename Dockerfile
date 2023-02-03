FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3300

CMD ["sh", "_run_app.sh"]
