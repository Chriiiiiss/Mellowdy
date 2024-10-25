FROM node:20-alpine as builder

WORKDIR /app
RUN corepack enable

COPY ./package.json .
COPY .env ./
COPY ./pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY . .
COPY .env ./

RUN pnpm run build

FROM alpine:latest as production

WORKDIR /app
COPY --from=builder /app/dist /app