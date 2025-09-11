# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose port (same as in .env)
EXPOSE 5000

# Run the server
CMD ["npm", "start"]
