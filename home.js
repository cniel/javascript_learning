//************************************************ PARTIE 1 : LES BASES ************************************************************************************//

/*var bool;
var salut = "bonjour";
var x = parseFloat(prompt('x :')), y = parseFloat(prompt('y :'));
var result = x + y;
var textResult = x+''+y;
*/
/* Avec un parseInt (ou parseFloat) suivi de prompt:
si l'utilisaeur de saisi pas un nombre, l'ordi retient NaN, évalué à false. */

/*######################
#### Les conditions ####
######################*/
/*
bool = x < y;
if(bool){
	alert(x + ' < ' + y);
}else if(x == y){
	alert(x + ' = ' + y);
}else{
	alert(x + ' > ' + y);
}

if(confirm('Veux-tu exécuter ce code Javascript ?')){
	alert('T\'as cliqué sur ok !\n');
}else{
	adult = confirm('Est-tu majeur?');
	alert(adult? 'T\'as accès au contenu total!' : "T'as pas accès à tout le contenu...");
}

//en condensé :
alert('Votre catégorie : ' + (confirm('Êtes-vous majeur ?') ? '18+': '-18')); //récupère la valeur de confirm avant de faire un affichage.

//évalué à false : zéro ou chaine de caractères vide.
// Le 'OU' permet de renvoyer la première valeur dont le contenu est évalué à true.
var vide='', contenu='Ya qqchose.';
alert(vide || contenu);
*/

/*######################
#### Les boucles   #####
######################*/
/*
var names = prompt('Votre nom: '), name;

while(name=prompt('Frere/soeur : ')){
	names += ', '+name;
}
alert('la famille : '+ names);
*/

/*########################
#### Les fonctions   #####
########################*/
/*
function add(x,y,z){
	if(typeof(z) === "undefined"){z=0};
	result = parseInt(x) + parseInt(y) + parseInt(z);
	return result;
}

var a=1, b=2;
//alert('a + b = ' + add(a,b));

//expl de fonction anonyme assignée à un nom (par référence apparemment):
var hello = function(){
	alert('Haloa !');
};
//appel :
hello();

//exemple de fonction isolée : execution directe de la fonction : pas besoin d'appel -> permet d'isoler le code.
// C'est une IEF : Immediately Executed Function. On peut aussi lui donner un nom en même temps;
(function bonjour(){
	var coucou='Hello world !';
	alert(coucou);
})();

var salut = (function(){
	return 'Kikoo!';
})();
alert(salut);
*/

/*#####################
#### Les objets   #####
#####################*/
//### STRING ###
/*
//.length	.toUpperCase()	.toLowerCase()	.split(separateur):convertit en tableau
var str = "Ceci est une chaîne de caractères.";
var strLen = str.length;
*/

//### TABLEAUX ###
/*
// .length
//.push(element)	.unshift(element):ajout en tête 	
//.shift():retire en tete		.pop():retire en queue
//.join(assembleur)

var names = ['Jean', 'Paul', 'Jacques', 'Bernard'];
var namages = [22, 'Clément', 21, 'Léa'];

namages.push(14, 'Léo');
//alert(namages[4]);

str = namages.join(' ; ');
//alert(str);


//### PARCOURS ###
for(var i=0, c=namages.length ; i<c ; i++){
	//alert(namages[i]);
}
*/

//DICTIONNAIRE ou Objet Littéral:
/*
var family={
	self: 'Clément',
	father: 'Stéphane',
	mother: 'Béatrice',
	lover: 'Léa'
};

//alert(family.mother);  //ou alert(family['mother']);
family.uncle = 'Christophe'; //ajout d'un item

//Parcours objet littéral
for(id in family){
	//alert(family[id]);
}
*/

//Exercice
/* Consigne
Entrer les noms dans un tableau.
Les afficher s'il y en a, en les séparant par un espace.
Si le tableau est vide, le dire à l'utilisateur.
*/
/*
(function(){
	var name, names = [];
	while(name=prompt('Saisir un nom : ')){
		names.push(name);
	}
	if(names.length > 0){
		alert(names.join(' '));
	}else{
		alert('Le tableau de noms est vide...');
	}
})();
*/

//TP1
/*
function checking(nombre){
	if(nombre >= 0 && nombre < 1000 && typeof(nombre)==="number"){
		return true;
	}else{
		return false;
	}
}

function itoa(chiffre){
	switch(chiffre){
		case 0:
			return '';
			break;
		case 1:
			return 'un';
			break;
		case 2:
			return 'deux';
			break;
		case 3:
			return 'trois';
			break;
		case 4:
			return 'quatre';
			break;
		case 5:
			return 'cinq';
			break;
		case 6:
			return 'six';
			break;
		case 7:
			return 'sept';
			break;
		case 8:
			return 'huit';
			break;
		case 9:
			return 'neuf';
			break;
		default:
			alert('Erreur de conversion.');
	}
}

function conversion(nombre){
	var unites, dizaines, centaines;
	unite = ['', 'et un', '-deux', '-trois', '-quatre', '-cinq', '-six', '-sept', '-huit', '-neuf', '-dix', '-onze', '-douze', '-treize', '-quatorze', '-quinze', '-seize'];
	dizaine = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
	
	unites = nombre%10;
	dizaines = parseInt((nombre%100)/10);
	centaines = parseInt((nombre%1000)/100);
	
	if(centaines != 1){
		if(dizaine != 1){
			alert(itoa(centaines) + "-cent-" + dizaine[dizaines] + unite[unites]);
		}else if(unite){
			if
		}
	}
	alert("centaines : " + itoa(centaines) + ", dizaines : " + itoa(dizaines) + ", unites : " + itoa(unites));

}

var nb;


while(!checking(nb = parseInt(prompt('Saisir un nombre compris entre 0 et 999.')))){
	alert("Erreur : nombre saisi incorrect");
}
alert("Le nombre est " + nb);
conversion(nb);
*/









//************************************************ PARTIE 2 MANIPULER LE CODE HTML *************************************************************************//


