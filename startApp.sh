#!/bin/bash

# --- Gitpod Workspace Startup Script ---

# Task 1: Install dependencies and start backend
echo "Installing backend dependencies..."
pnpm install

echo "Starting backend server..."
pnpm run server &

# Task 2: Wait for backend (port 5000) to be ready, then start frontend
echo "Waiting for backend to be ready on http://localhost:5000..."
npx wait-on http://localhost:5000

echo "Starting frontend..."
npm run start &

# Port info (for documentation/reference)
echo "Expected ports:"
echo "- Backend: http://localhost:5000 (auto-preview)"
echo "- Frontend: http://localhost:3000 (auto-preview)"
