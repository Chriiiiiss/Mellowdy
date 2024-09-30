FROM node:20-alpine as builder

WORKDIR /app
RUN corepack enable

COPY ./package.json .
COPY ./pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build


FROM nginx:latest as production
ENV NODE_ENV production


COPY --from=builder /app/dist /usr/share/nginx/html


COPY nginx/mellowdy-front-setup.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]