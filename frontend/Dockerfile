FROM node:16-alpine

WORKDIR /app/frontend

COPY . .

RUN npm install

RUN npm run lint

EXPOSE 3000

CMD ["npm", "run", "start"]
