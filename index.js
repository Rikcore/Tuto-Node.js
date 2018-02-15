// ===== Les types simples =======

// let unNombre = 5.7;
// console.log(unNombre, typeof unNombre);

// let uneString = `mon texte : ${unNombre}`;
// console.log(uneString, typeof uneString);

// let unArray = ['duTexte', unNombre, 8, false, uneString];
// console.log(unArray, typeof unArray);

// let unObjet = {
// 	unPropriete: 'saValeur',
// 	unArray,
// 	// unArray: unArray,
// }
// console.log(unObjet, typeof unObjet);

// ============== Une classe ======================================

// let MaClasse = function() {
// 	let privee = 5;

// 	this.maFctPublic = function () {
// 		console.log(privee);
// 	};
// };

// let monObjet = new MaClasse();

// console.log(monObjet.privee);
// monObjet.maFctPublic();

// ============== Les closures ================================

// let externe = 'coucou';

// function setter(val) {
// 	let externe = 'Mouah ah ah';
// 	externe = val;
// 	console.log(externe);
// }

// console.log(externe);
// setter('blabla');
// console.log(externe);

// (function() {
// 	let cpt = 0;

// 	function compteur() {
// 		++ cpt;

// 		console.log(cpt);
// 	}

// 	compteur();
// 	compteur();
// 	compteur();
// 	compteur();
// })();

// console.log(cpt);

// ==== Les arrow functions ====

// let MaClasse = function() {
// 	this.vitesse = 'je roule lentement';

// 	this.rouler = function() {
// 		// console.log(this);
// 		// console.log(this.vitesse);

// 		['test', 'youpee'].forEach((val) => {
// 			// console.log(this);
// 			console.log(this.vitesse + val);
// 		})
// 	};
// };

// let maVoiture = new MaClasse();

// maVoiture.rouler();
// maVoiture.vitesse = 'Je me traine misérablement';
// maVoiture.rouler();

// let roulerLocal = maVoiture.rouler;
// roulerLocal();

// === Example d'export ===

console.log('im executed');

function toto() {
	console.log('im toto');
}

module.exports = {
	toto
	// toto: toto
}
