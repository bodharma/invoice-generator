# ⚠️ ARCHIVED REPOSITORY - This Dockerfile is from an archived version
# For the latest actively maintained version, visit:
# https://github.com/EphyrTech/invoice-generator.git
#
# This Dockerfile is part of a fork by Bohdan Lesiv (@bodharma)
# Enhancement: Added Docker deployment support to the original invoice generator
# Archive Date: January 5, 2026

# Use an official Node.js image as a build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm run build

WORKDIR /app
ENV NODE_ENV=production

# Copy the build output and public assets from the builder stage

# Expose the port that the app listens on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
