FROM node:12.9.0

WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . /backend/

EXPOSE 4000

CMD ["npm", "start"]