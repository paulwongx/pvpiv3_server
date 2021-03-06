const fetchGameMaster = require('./fetchGameMaster.js');
const fetchPopular = require('./fetchPopular.js');

fetchGameMaster().then(()=>{
    fetchPopular();
}).catch(err => console.error(err));