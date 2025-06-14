#!/bin/sh

set -e

# Installe les dépendances si node_modules n'existe pas
if [ ! -d "node_modules" ]; then
echo "Installing dependencies..."
npm install
fi

echo "==> Lancement de vite"
exec "$@"