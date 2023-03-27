# Dockerfile.react
FROM node:16-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --quiet

COPY . .

EXPOSE 8080

CMD ["npm", "start"]