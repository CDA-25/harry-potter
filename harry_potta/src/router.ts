import { HomePage } from './pages/HomePage';
import { HousesPage } from './pages/HousesPage';
import { MoviesPage } from './pages/MoviesPage';
import { BooksPage } from './pages/BooksPage';
import { CharacterDetailPage } from './pages/CharacterDetailPage';

export async function router(page: string): Promise<string> {
  if (page.startsWith('#/character')) {
    const params = new URLSearchParams(page.split('?')[1]);
    const name = params.get('name') || '';
    return CharacterDetailPage(decodeURIComponent(name));
  }
  switch (page) {
    case '#/houses': return HousesPage();
    case '#/films': return MoviesPage();
    case '#/livres': return BooksPage();
    default: return HomePage();
  }
}

