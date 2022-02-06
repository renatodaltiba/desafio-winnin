FROM node:alpine as dependencies

WORKDIR /app/desafiowinnin

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]