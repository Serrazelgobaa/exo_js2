// Bienvenue à ce premier challenge.
// Vous afficherez les resultats dans le terminal avec la commande:
// 'node <nom du ficher>'
// Pour que les resultats soient visible dans le terminal, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(fonction());
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!




//Additionnez ces deux termes et stockez le résultat dans une variable
//puis l'afficher
const num1 = "4";
const num2 = "5";

const resultat = num1 + num2;

console.log(resultat);

//DONE



//Variables et opérateurs
//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.




//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2

const villes = ['Paris','Rome','Rio','New York','Tokyo'];

console.log(villes[3]);

villes.push('Copenhague');

console.log(villes);

villes.splice(2, 1);

console.log(villes);

//DONE




//Les boucles
//
//Boucler sur le tableau 'array1' afin de monter chaque
//éléments au carré et afficher le tableau.

const array1 = [2, 4, 8];
var arraySquare = [];

array1.forEach((nombre) => {
	arraySquare.push(nombre*nombre);
});

console.log(arraySquare);
//DONE


// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
const promo = [12, 13, 17, 3, 14, 18];

const calculerMoyenne = (notes) => {
	let total = 0;

	notes.forEach((note) => {
		total = total + note;
	});

	moyenne = total / notes.length;

	return moyenne;
};

console.log(calculerMoyenne(promo));



// Afficher la date d'aujourd'hui sous la forme:
// "Nous somme le [jour/mois/année] et il est [heure/minute]"
// Afficher ensuite "bonjour" si il est en 7h du matin et 17h
// et "bonsoir" s'il est entre 17h et 00H

var now = new Date(); 

var annee = now.getFullYear();
var mois = now.getMonth()+1;

mois = ('0'+mois).slice(-2);
	
var jour = ('0'+now.getDate()   ).slice(-2);

var heure = ('0'+now.getHours()  ).slice(-2);
var minutes = ('0'+now.getMinutes()).slice(-2);

function direBonjour() {

	let salut;

	if (heure >= 7 && heure <=17)
	{
		salut = 'Bonjour';
	}

	else {
		salut = 'Bonsoir';
	}

	return salut;
}

console.log(direBonjour() + ', nous sommes le ' + jour + '/' + mois + '/' + annee + ' et il est ' + heure + 'h' + minutes);



//les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18

const age = 19;

if (age >= 18)
{
	console.log('Peut voter');
}

else {
	console.log('Ne peut pas voter');
}

//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
const chiffre1 = 3;
const chiffre2 = 4;

const add = (num1, num2) => {

	let resultat = num1 + num2;

	return resultat;
//DONE
};

console.log(add(chiffre1,chiffre2));





//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

const i = 4;

const square = (number) => {
	let resultat = i*i;
	return resultat;
  //DONE
};

console.log(square(i));



// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];

const newBeatles = beatles.map((x) => { return x.toUpperCase(); });

console.log(newBeatles);

//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.

const tab = [-2, 3, 4];

const soustrait = (tableau) => {

	let newTableau = [tableau[0]];
	for(var i=1; i < tableau.length ; i++) {
		let newVal = tableau[i] - tableau[i-1];
		newTableau.push(newVal);
	}

	return newTableau;
 //DONE
};

console.log(soustrait(tab));






//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est supérieur à 0.
const array2 = [-2, 4, -5, 3, 6];
const addPositiveNumber = (tableau) => {

	let resultat = 0;

	tableau.forEach((nombre) => {
		if(nombre > 0) {
			resultat = resultat + nombre;
		}
	});

	return resultat;
 //DONE
};

console.log(addPositiveNumber(array2));




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
	const pi = 3.14;

	let perimetre = r * 2 * pi;

	return perimetre;
  //DONE
};

console.log(périmetreCercle(3));

//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
const capitalize = (word) => {
	nouveauMot = word[0].toUpperCase();

    let i = 1;

    while (i < word.length)
    {
        nouveauMot = nouveauMot + word[i].toLowerCase();

        i++;
    }
    return nouveauMot;
  //TODO
};

var testMot = "SimPloN";

console.log(capitalize(testMot)); 



//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.


const oddOrEven = (nombre) => {
	let mod = nombre % 2;

	if(mod === 0) {
		return "pair";
	}

	else {
		return "impair";
	}
};

const nombreTest = 15;

console.log(nombreTest + " est un nombre " + oddOrEven(nombreTest));


//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {

	let resultat = word.split("");
	resultat = resultat.reverse();
	resultat = resultat.join("");

	return resultat;
  //TODO
};

const name = "Tania";

console.log(reverseWord(name));


//créez une fonction qui renvoie la somme de tableau
const nombres = ["3", "5", "6", "2"];

const sommeTableau = (tableau) => {
	let resultat = 0;

	tableau.forEach((nombre) => {
		let newNombre = parseInt(nombre);
		resultat += newNombre;
	});

	return resultat;
};

console.log(sommeTableau(nombres));