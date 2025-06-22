// COURS TIPAGE TS :

// les variables :

const mastring: string = "coucou"
let mastring2: string|null = null
mastring2 = "coucou2"

// les fonctions :
function maFonction(a: string, b: number, c: string): string {
console.log("a =>",a)
console.log("b =>",b)
console.log("c =>",c)
return a
}

const name: string = maFonction("John", 40, mastring)

console.log("name de ma fonction :", name)

interface VehiculeInterface {
marque: string,
modele: string,
annee: number,
couleur: string
}
// interface => créer un miroir pour représenter l'interface et s'en sert pour le typage : ça utilise de la mémoire. Interface on peut extend, mais pas type

interface NewInterface extends VehiculeInterface {
nom: string,
usager: string,
age: number
}

// type : une autre manière de faire interface : un vrai type: il ne créer pas d'objet c'est un vrai contrat, il vient vérifier ici à la voler sans utiliser la mémoire. Préférable à interface (si possible)
type VehiculeInterface2 = {
nom: string,
usager: string,
age: number
}

const voiture: VehiculeInterface = {
marque: "Renault",
modele: "Clio",
annee: 2020,
couleur: "rouge"
}

const moto: NewInterface = {
nom: "Ma vielle MOTO",
usager: "John",
age: 2,
marque: "Kawazaki",
modele: "du turfu",
annee: 2020,
couleur: "yellow"
}

function afficherVehicule(vehicule: VehiculeInterface ):void {
console.log(`Voiture : ${vehicule.marque} ${vehicule.modele}, Année : ${vehicule.annee}, Couleur : ${vehicule.couleur}, qui s'appelle ${vehicule.nom} et appartient à ${vehicule.usager} depuis ${vehicule.age} ans`);
} // biensur les éléments extends seront undefinded du coup

afficherVehicule(voiture)
afficherVehicule(moto)
