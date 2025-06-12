import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const headerDiv = document.createElement('div')
headerDiv.className = 'header py-10 bg-blue-900 fixed top-0 right-0 left-0 z-1000'

const linkAccueil = document.createElement('a')
linkAccueil.href = ''
linkAccueil.className = 'px-8 text-2xl text-white'
linkAccueil.textContent = 'Accueil'

const linkMaison = document.createElement('a')
linkMaison.href = ''
linkMaison.className = 'px-8 text-2xl text-white'
linkMaison.textContent = 'Maisons'

const linkFilms = document.createElement('a')
linkFilms.href = ''
linkFilms.className = 'px-8 text-2xl text-white'
linkFilms.textContent = 'Films'

const linkLivres = document.createElement('a')
linkLivres.href = ''
linkLivres.className = 'px-8 text-2xl text-white'
linkLivres.textContent = 'Livres'

headerDiv.appendChild(linkAccueil)
headerDiv.appendChild(linkMaison)
headerDiv.appendChild(linkFilms)
headerDiv.appendChild(linkLivres)
app.appendChild(headerDiv)

const mainDiv = document.createElement('div')
mainDiv.className = 'grid grid-cols-5 gap-6 p-10'

const h1 = document.createElement('h1')
h1.className = 'flex items-center justify-center text-5xl pt-10 drop-shadow-[0_0_5px_white] mt-30'
h1.textContent = 'Harry Potter'

app.appendChild(h1)
app.appendChild(mainDiv)

type Character = {
  name: string;
  house:string
};


const fetchAPICharacter = async () => {
  const res = await fetch("https://hp-api.onrender.com/api/characters", { method: "GET" });
  const chars: Character[] = await res.json();
  

  chars.forEach(char => {
  let name:string = char.name
  let house:string = char.house

  const card = document.createElement("div");
  card.className = "bg-black bg-opacity-50 rounded-lg p-6 m-4 max-w-xs text-white shadow-lg flex flex-col items-center justify-center border-4 border-white-500 hover:bg-sky-700 hover:cursor-pointer"

  const nameElem = document.createElement("h2");
  nameElem.textContent = name;
  nameElem.className = "text-2xl font-bold mb-2";

  const houseElem = document.createElement("p");
  houseElem.textContent = `Maison : ${house}`;
  houseElem.className = "text-lg";

  card.appendChild(nameElem);
  card.appendChild(houseElem);

  mainDiv.appendChild(card);
});
}

fetchAPICharacter()

const footer = document.createElement('footer')
footer.className = 'bg-blue-900 text-white text-center py-4'
footer.textContent = 'Petitjean Quentyn'

app.appendChild(footer)


