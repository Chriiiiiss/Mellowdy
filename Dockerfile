FROM node:20-alpine as builder

WORKDIR /app
RUN corepack enable


RUN pwd
COPY ./package.json .
COPY ./pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
RUN npm install -g serve

EXPOSE 3001

ENV VITE_MELLOWDY_API_URL=${VITE_MELLOWDY_API_URL}


