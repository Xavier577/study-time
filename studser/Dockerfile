# step one
FROM node:16-alpine as builder

WORKDIR /server

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

# step 2
FROM node:16-alpine 

WORKDIR /server

COPY package*.json ./

RUN yarn install --production

COPY --from=builder /server/dist ./dist

EXPOSE 8080

CMD ["node", "dist/src/index"]



