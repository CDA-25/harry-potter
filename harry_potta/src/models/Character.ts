export class Character {
  name: string;
  house: string;
  image: string;
  actor: string;
  gender: string;
  dateOfBirth: string;
  ancestry: string;

  constructor(data: any) {
    this.name = data.name ?? 'Inconnu';
    this.house = data.house ?? 'Sans maison';
    this.image = data.image ?? '';
    this.actor = data.actor ?? 'Inconnu';
    this.gender = data.gender ?? 'inconnu';
    this.dateOfBirth = data.dateOfBirth ?? 'Inconnu';
    this.ancestry = data.ancestry?? 'Inconnu';
  }

  get imageUrl(): string {
    return this.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
  }

  get description(): string {
    return `${this.name} is a ${this.gender} from ${this.house} house. This character is played by ${this.actor}. ${this.name} is born in ${this.dateOfBirth} and his ancestor are ${this.ancestry}.`;
  }
}
