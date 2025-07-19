# --------------------
# Stage 1: Build stage
# --------------------
    FROM node:24 AS builder

    WORKDIR /app
    
    # Install dependencies separately for better caching
    COPY package*.json ./
    RUN npm install
    
    # Copy all app source
    COPY . .
    
    # Optional: Build step (skip if not needed for dev server)


    RUN npm run build
    
    # -------------------------
    # Stage 2: Run Dev Server
    # -------------------------
    FROM node:24
    
    WORKDIR /app
    
    # Copy built app and node_modules from builder stage
    COPY --from=builder /app ./
    
    # Expose the port your dev server runs on (CRA uses 3000, Vite uses 5173)
    EXPOSE 3000
    
    # Run your dev server
    CMD ["bash", "-c", "HOST=0.0.0.0 npm start"]
    