const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const fetchPopular = async () => {

    return new Promise((resolve, reject) => {
        const popularUrl = 'https://www.gamepress.gg/pokemongo/popular-pokemon-all';
        const gameMaster = require(`./gamemaster.json`);
        const allPokemon = gameMaster.pokemon;
        let res = null, popArr = [];

        // Get data from website
        axios.get(popularUrl).then(res => {
            const $ = cheerio.load(res.data);
            const re = /\/pokemongo\/pokemon\/(.*)/;
            let resArr = [];

            $('.view-id-popular_pages').find('.view-content li a').each((i, elm) => {
                if (i < 100) {
                    resArr.push({
                        'dex': parseInt($(elm).attr('href').match(re)[1]),
                        'name': $(elm).find('.pages-ranking-title').text().replace(/\n/g, ''),
                    });
                }
            });
            return resArr;

        }).then((resArr)=>{
            // Get corresponding data from gameMaster.json
            // First filters by dex. If multiple (ie, Ampharos Mega)...
            // Filters by speciesName
            // Second filter ensures regex doesn't have special chars
            resArr.forEach(pop => {
                let tmpArr = [];

                tmpArr = allPokemon && allPokemon.filter(all => all.dex === pop.dex);

                if (tmpArr.length === 1) {
                    popArr.push(tmpArr[0]);

                } else if (tmpArr.length > 1) {
                    let encoded = pop.name.replace(/[.*+?^${}()|[\]\\]/g, '');
                    let encoded1 = encoded.trim().split(/[\s-]+/).join('_');
                    let encoded2 = encoded.trim().split(/[\s-]+/).reverse().join('_');

                    const regex1 = new RegExp(`^${encoded1}$`,'ig');
                    const regex2 = new RegExp(`^${encoded2}$`,'ig');

                    let sel = [];
                    sel = tmpArr.filter(p => regex1.test(p.speciesId));
                    if (sel.length === 0) {
                        sel = tmpArr.filter(p => regex2.test(p.speciesId));
                    }

                    if (sel.length === 1) {
                        popArr.push(sel[0]);
                    }
                }


            });

            const output = {
                lastUpdated: new Date(),
                pokemon: popArr
            };

            fs.writeFileSync('popular.json', JSON.stringify(output));
            resolve(popArr);

        }).catch(err => {
            console.error(err);
        });
    });
}

module.exports = fetchPopular;