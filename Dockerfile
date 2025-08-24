FROM node:18-alpine AS base

# Enable pnpm
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

# Install necessary build tools
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma/

# Install dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Generate Prisma Client
RUN pnpm prisma generate

# Copy application code
COPY . .

# Set build-time environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the application
RUN pnpm run build

# Expose port 3001 (as requested)
EXPOSE 3001

# Command to run the application with Prisma
CMD ["pnpm", "prisma", "generate", "&&", "pnpm", "start", "--", "-p", "3001"]
