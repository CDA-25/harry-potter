#!/bin/sh
set -e

# Installe les dépendances si node_modules est absent (optimisé)
if [ ! -d "node_modules" ]; then
  echo "==> Installation des dépendances npm…"
  npm install
fi

echo "==> Lancement de Vite"
exec "$@"