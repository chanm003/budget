FROM node:alpine

## setup yarn workspace inside container
WORKDIR '/'
COPY ./api/package.json ./packages/api/package.json
COPY ./shared/package.json ./packages/shared/package.json
COPY ./package.json ./
RUN yarn

COPY ./api ./packages/api
COPY ./shared ./packages/shared

WORKDIR '/packages/api'

CMD npm run dev
