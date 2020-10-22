FROM node:14.9.0-alpine

RUN apk add --no-cache git

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH $PATH:./node_modules/.bin

COPY package.json /usr/src/app/

COPY . /usr/src/app

ENV NODE_ENV production

RUN npm install -g json -q

ARG ASSETS_URL
ARG CIRCLE_BRANCH
ARG CIRCLE_WORKFLOW_WORKSPACE_ID
ARG CIRCLE_SHA1


CMD [ "npm", "start" ]

EXPOSE 3000
