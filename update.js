const fetchGameMaster = require('./fetchGameMaster.js');
const fetchPopular = require('./fetchPopular.js');
const fs = require('fs');

fetchGameMaster().then(async ()=>{
    await fetchPopular();
}).then(()=>{
    const json = fs.readFileSync('./popular.json','utf8');
    data = JSON.parse(json);
    lastUpdated = data.lastUpdated
    console.log(lastUpdated);
}).catch(err => console.error(err));

