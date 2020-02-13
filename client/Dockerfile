FROM node:alpine as builder

## setup yarn workspace inside container
WORKDIR '/'
COPY ./client/package.json ./packages/client/package.json
COPY ./shared/package.json ./packages/shared/package.json
COPY ./package.json ./
RUN yarn

COPY ./client ./packages/client
COPY ./shared ./packages/shared

WORKDIR '/packages/client'

RUN yarn run build

FROM nginx
EXPOSE 3000
COPY ./client/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /packages/client/build /usr/share/nginx/html
