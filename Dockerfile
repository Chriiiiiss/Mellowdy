FROM node:20-alpine as builder

WORKDIR /app
RUN corepack enable

COPY ./package.json .
COPY ./pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM alpine:latest as production

WORKDIR /app
COPY --from=builder /app/dist /app