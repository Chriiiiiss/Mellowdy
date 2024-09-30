FROM node:20-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install --omit=dev

COPY . .

CMD ["npm", "run", "build"]

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
RUN npm install -g serve

EXPOSE 3000

ENV VITE_MELLOWDY_API_URL=${VITE_MELLOWDY_API_URL}


