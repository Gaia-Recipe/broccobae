#!/bin/bash

# Script to start the development server for BroccoBae project

# Default port
PORT=8080

# Check if a port is provided as an argument
if [ $# -eq 1 ]; then
  if [[ $1 =~ ^[0-9]+$ ]]; then
    PORT=$1
  else
    echo "Error: Port must be a number"
    exit 1
  fi
fi

echo "Starting BroccoBae development server on port $PORT..."
echo "Access the website at http://localhost:$PORT"
echo "Press Ctrl+C to stop the server"
echo ""

# Start the Python HTTP server
python -m http.server $PORT