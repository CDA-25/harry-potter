FROM node:22.16-alpine3.22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm i
# pas de ci car il manque le package-lock.json

FROM build AS dev
WORKDIR /app
COPY . .
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
EXPOSE 5173
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]