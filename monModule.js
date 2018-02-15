const appelAPI = duration => (new Promise((resolve) => {
	setTimeout(() => {resolve('bloublou')}, 4000);
}))

module.exports = {
	// callback
	// monTraitementAsynchrone: function(duration, callback) {
	// 	console.log('Demarrage du traitement');
	// 	setTimeout(() => {
	// 		// fin du traitement

	// 		console.log('Fin du traitement');
	// 		callback('monRetour');

	// 	}, duration);
	// }


	// Promises
	// monTraitementAsynchrone: (duration) => (new Promise((resolve, reject) => {
	// 	console.log('Demarrage du traitement');
	// 	setTimeout(() => {
	// 		// fin du traitement

	// 		console.log('Fin du traitement');
	// 		resolve('monRetour');

	// 	}, duration);
	// }))


	// Async await
	monTraitementAsynchrone: async (duration) => {
		console.log('Demarrage du traitement');

		const monRetourAPI = await appelAPI(duration);

		return monRetourAPI;
	}
}
