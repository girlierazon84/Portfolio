# --------- deps stage ----------
# Use official Node.js image (Next.js requires Node 18+)
FROM node:20-alpine AS deps

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install all dependencies (dev + prod, needed for build)
RUN npm ci

# --------- build stage ----------
FROM node:20-alpine AS build
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Reuse node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# --------- runtime stage ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only the assets needed at runtime
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

# Next.js defaults to port 3000
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
