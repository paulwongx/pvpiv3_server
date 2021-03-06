const axios = require('axios');
const fs = require('fs');

const fetchGameMaster = async () => {
	const url =
		'https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/gamemaster.json';

	return new Promise((resolve, reject) => {
		axios
			.get(url)
			.then(res => {
				fs.writeFile(
					'gamemaster.json',
					JSON.stringify(res.data),
					err => {
						if (err) throw err;
						resolve(res);
					}
				);
			})
			.catch(err => {
				console.error(err);
			});
	});
};

module.exports = fetchGameMaster;
