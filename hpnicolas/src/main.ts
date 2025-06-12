import './style.css'


class Perso {
  name: string;
  birth: string;
  gender: string;

  constructor(name: string, birth: string, gender: string) {
    this.name = name;
    this.birth = birth;
    this.gender = gender;
  }

  display(): void {
    let name: string = this.name
    let birth: string = this.birth
    let gender: string = this.gender

    let divPerso = document.createElement("div")
    divPerso.id = "perso"

      let nameContent = document.createElement("div")
      nameContent.id = "nameContent"
      nameContent.textContent = name
      divPerso.appendChild(nameContent)

      let birthContent = document.createElement("div")
      birthContent.id = "birthContent"
      birthContent.textContent = birth
      divPerso.appendChild(birthContent)

      let genderContent = document.createElement("div")
      genderContent.id = "genderContent"
      genderContent.textContent = gender
      divPerso.appendChild(genderContent)
    
      document.body.appendChild(divPerso)
  }
}

const fetchAPIChar = async (): Promise<any[]> => {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  const chars = await res.json();
  return chars;
};

const charsList = async () => {
  const rawChars = await fetchAPIChar();

  const persos: Perso[] = rawChars.map((char: any) => {
    if (!char.dateOfBirth) {
      char.dateOfBirth = null
    }
    
    if (!char.gender) {
      char.gender = null
    }  
    
    return new Perso(char.name, char.dateOfBirth, char.gender);
  });

  persos.forEach(p => p.display());
};

charsList();




