FROM node:10.24.1 as installer
WORKDIR /app

COPY package*.json /app/
RUN npm ci


FROM node:10.24.1-slim as runtime
WORKDIR /app

COPY --from=installer /app /app
COPY . /app

ENTRYPOINT ["node", "index.js"]
