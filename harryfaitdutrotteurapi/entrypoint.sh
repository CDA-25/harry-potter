#!/bin/sh
set -e

#installe les dependances si node_modules est absent (optimisé)
if [ ! -d "node_modules" ]; then
   echo "Installation des dépendances npm"
   npm install
fi

#lance le serveur de développement
echo "Lancement de vite"
exec "$@"