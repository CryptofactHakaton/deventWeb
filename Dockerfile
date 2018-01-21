FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
RUN npm build

CMD yarn prod
EXPOSE 3000
