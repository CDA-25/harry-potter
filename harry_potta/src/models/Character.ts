export class Character {
  name: string;
  house: string;
  image: string;
  actor: string;
  gender: string;
  dateOfBirth: string;
  ancestry: string;

  constructor(data: any) {
    this.name = data.name ?? 'Unknown';
    this.house = data.house ?? 'unknown';
    this.image = data.image ?? '';
    this.actor = data.actor ?? 'Unknown actor';
    this.gender = data.gender ?? 'Unknown';
    this.dateOfBirth = data.dateOfBirth ?? 'unknown date';
    this.ancestry = data.ancestry?? 'Unknown';
  }

  get imageUrl(): string {
    return this.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
  }

  get description(): string {
    return `${this.name} is a ${this.gender} from ${this.house}. This character is played by ${this.actor}. ${this.name} is born in ${this.dateOfBirth} and his ancestor are ${this.ancestry}.`;
  }
}
