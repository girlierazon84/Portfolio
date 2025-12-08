# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy everything including .env.docker
COPY . .

# Rename .env.docker → .env before build
RUN mv .env.docker .env

RUN npm run build

# Production stage with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# --- IGNORE ---