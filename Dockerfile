FROM node:latest
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build

CMD yarn prod
EXPOSE 3000
