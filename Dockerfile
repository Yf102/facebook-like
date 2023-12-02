ARG  NODE_VERSION
ARG EXPOSE_PORT
FROM node:${NODE_VERSION}-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --arch=arm64 --platform=linux --libc=musl sharp


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
ARG ENVIRONMENT_BUILD
ARG VERSION
COPY --from=deps /app/node_modules ./node_modules
COPY . .


RUN npm run build

# If using npm comment out above and use below instead
# RUN npm run build

EXPOSE $EXPOSE_PORT

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]
