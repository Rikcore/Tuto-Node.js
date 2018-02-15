const express = require('express');
const monModule = require('./monModule');

const app = express();

app.get('/', (req, res) => {
	// callback
	// monModule.monTraitementAsynchrone(4000, (monRetour) => {
	// 	res.send('Hello World!');
	// });

	// promise (/async)
	// monModule.monTraitementAsynchrone(4000).then((monRetour) => {
	// 	res.send('Hello World!');
	// })

	// async / await
	monModule.monTraitementAsynchrone(4000).then(() => {
		res.send('Hello World!');
	})


	// res.send('Hello World!');

	// let ts = Date.now();

	// let endTs = ts + 7000;

	// while (Date.now() < endTs) {
	// 	// traitement lourd
	// }

	// setTimeout(() => {
	// 	res.send('Hello World!');
	// }, 7000);
})

app.get('/maVoiture/:model', (req, res) => {
	res.send(req.params.model);
})

app.listen(3040, () => {
  console.log('Example app listening on port 3040!')
})

