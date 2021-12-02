
/* Commentaire sur 
plusieurs ligne */

// Commentaire sur une seule ligne //

// Excercice //

var separation = "------------------------"

console.log("Elan Formation")

var separation = "------------------------"
console.log(separation)

console.log(100)

var separation = "------------------------"
console.log(separation)

// CAMEL CASE monTexte
// SNAKE CASE mon_texte
// Pas d'espace et pas de numéro

var monTexte = "Mon texte en minuscule"  // Texte & String
console.log(monTexte)

var separation = "------------------------"
console.log(separation)

var prixHT = 99           // integer
var quantite = 5
console.log(prixHT)

var prixTTC = 100.50      // float
console.log(prixTTC)

var separation = "------------------------"
console.log(separation)

var booleen = true        //False - Booleen
console.log(booleen)

var separation = "------------------------"
console.log(separation)

var monTableau = [
    
    "Mon texte 1", 
    "Mon texte 2", 
    "Mon texte 3", 
    "Mon texte 4"
]

console.log(monTableau)     //Afffiche tous les élément du tableau
console.log(monTableau[0])  //Affiche le 1er élément du tableau
console.log(monTableau[2])  //Affiche le 3e élément du tableau

var separation = "------------------------"
console.log(separation)

var monTexteEnMajuscule = monTexte.toUpperCase()
console.log(monTexteEnMajuscule)  //Affiche la phrase en Majuscule + Utilisation ultérieurement

console.log(monTexte.toUpperCase()) //uniquement pour l'affichage

var separation = "------------------------"
console.log(separation)

var total = prixHT * quantite    //Uniquement  + - / *
console.log(total)    //Prix sans texte
console.log("Le prix total est de " + total + " €") // Prix avec texte

var separation = "------------------------"
console.log(separation)

//concaténation

var texte1 = "Hello"
var texte2 = "Aurevoir madame"
console.log(texte1 + " " + texte2)  //Aligner avec espace
console.log(texte1 + "\n" + texte2) //Retour à la ligne

var separation = "------------------------"
console.log(separation)

var tailleTableau = monTableau.length  //Compter le nombre d'élément dans le tableau
console.log("Mon tableau contient"+ " " + tailleTableau + " " + "éléments")

var separation = "------------------------"
console.log(separation)

console.log(texte1.length) //Comptage du nombre de lettre du mots " Texte1"

console.log(texte2.length) //Comptage du nombre de lettre du mots " Texte2" + Espace comprise

console.log(total.length) //Ne marche que sur quelque chose de mesurable

var separation = "------------------------"
console.log(separation)

console.log(typeof monTexte)       //Affiche String
console.log(typeof prixHT)         //Affiche Number
console.log(typeof booleen)        //Affiche Booleen
console.log(typeof monTableau)     //Affiche Object
console.log(typeof texte1)         //Affiche String
console.log(typeof texte1.length)  //Affiche Number

var separation = "------------------------"
console.log(separation)

// Convertir une valeur en francs --> en euros

var francs = 100
var taux = 6.55957
var euros = francs / taux
console.log(euros)             //Reponse complete
console.log(euros.toFixed(2))  //Nombre de décimal (2)

var separation = "------------------------"
console.log(separation)

// Stucture de controle - Conditions

var age = 25
if(age >= 18) {
     //Alerte("La personne est majeure")
     console.log("La personne est majeure")
}else {
     //Alerte("La personne est mineur")
     console.log("La personne est mineure")
}

var separation = "----"
console.log(separation)

// Si la personne a plus de 18 --> Assez jeune
// Si la personne a plus de 18 --> Vieille
// Si la personne a plus de 18 --> très vieille

if(typeof age == "number") {
    if(age >= 80) {
     console.log("très vieille")
  } else if (age >= 30){
     console.log("vieille")
  } else if (age >= 18){
    console.log("Assez jeune")
  } else {
    console.log("Age non géré")
    }
} else {
    console.log("La valeur n'est pas numérique")
}

var separation = "----"
console.log(separation)

var Reponse = ""

if(typeof age == "number") {
    if(age >= 80) {
    Reponse = "très vieille"
  } else if (age >= 30) {
    Reponse = "vieille"
  } else if (age >= 18) {
    Reponse = "Assez jeune"
  } else {
    Reponse = "Age non géré"
    }
} else {
    Reponse = "La valeur n'est pas numérique"
}
console.log(Reponse)

var separation = "------------------------"
console.log(separation)

//Boucle (Loop)
//FOR (Pour) et While (tant que) et FOREACH

for(i = 1; i <= 10; i++){
    console.log(i)
}
var separation = "----"
console.log(separation)

j = 1
  while(j <= 10)  {
  console.log(j)
  j++
}

var separation = "------------------------"
console.log(separation)

var voitures = ["peugeot", "BMW", "Mercedes", "Toyota"]
console.log(voitures)
console.log("il y a" + " " + voitures.length +" " + "marques")

var separation = "----"
console.log(separation)

for(i = 0; i < voitures.length; i++) {
    console.log(voitures[i])
}

var separation = "----"
console.log(separation)

for(i = 0; i < voitures.length; i++) {
    console.log(voitures[i].toUpperCase())
}

var separation = "----"
console.log(separation)

j = 0
while(j < voitures.length) {
    console.log(voitures[j].toUpperCase())
    j++
}

var separation = "------------------------"
console.log(separation)

voitures.forEach(
    marque => console.log(marque.toUpperCase())
)

var separation = "------------------------"
console.log(separation)

var valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var table = 8

valeurs.forEach(
   valeur => console.log(valeur * table)
)

var separation = "----"
console.log(separation)

valeurs.forEach(
    valeur => console.log(
        valeur + " x " + table + " = " + valeur * table
      )
)

var separation = "------------------------"
console.log(separation)

var notes = [12, 7, 10, 11, 19, 13, 16, 18, 7, 8, 10]
//moyenne = 11.91
var nbNotes = notes.length
var somme = 0

notes.forEach(
  note => somme += note
)

var moyenne = (somme / nbNotes).toFixed(2)
console.log("La moyenne est de " + moyenne)


