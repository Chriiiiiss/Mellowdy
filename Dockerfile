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
COPY --from=builder /app/nginx/mellowdy-front.conf /etc/nginx/conf.d/default.conf:ro
COPY --from=builder /app/nginx/certbot/www /var/www/certbot/:ro
COPY --from=builder /app/nginx/certbot/conf/ /etc/nginx/ssl/:ro

#EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]