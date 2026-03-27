# ─────────────────────────────────────────────────────────────────
# Stage 1: Build the React / Vite frontend
# ─────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install frontend dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files (includes .env with VITE_ variables for build-time injection)
COPY . .

# Build the React app → outputs to /app/dist
RUN npm run build

# ─────────────────────────────────────────────────────────────────
# Stage 2: Production image – Node.js server only
# ─────────────────────────────────────────────────────────────────
FROM node:20-alpine AS production

WORKDIR /app

# Copy server source
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --omit=dev

COPY server/ ./server/

# Copy the built React app from Stage 1
COPY --from=builder /app/dist ./dist

# ─────────────────────────────────────────────────────────────────
# Runtime config
# ─────────────────────────────────────────────────────────────────
# The server reads PORT, GMAIL_USER, GMAIL_APP_PASSWORD at runtime.
# Pass them via `docker run -e` or docker-compose env_file.
ENV PORT=5001
ENV NODE_ENV=production

EXPOSE 5001

WORKDIR /app/server
CMD ["node", "index.js"]
