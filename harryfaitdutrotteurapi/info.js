const hpApiUrl = 'https://potterhead-api.vercel.app/api/characters';

// Fonction pour récupérer les données d'une URL
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Impossible de récupérer les données depuis ${url} :`, error);
    return null; // Retourne null en cas d'erreur
  }
}

// Récupérer les données et les afficher dans la page
fetchData(hpApiUrl).then(data => {
  if (data) {
    const container = document.getElementById('raw-data');
    container.textContent = JSON.stringify(data, null, 2);
  }
});