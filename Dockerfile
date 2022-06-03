FROM node:14-buster
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start