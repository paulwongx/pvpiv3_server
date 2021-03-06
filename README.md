# Popular Pokemon API
This API provides the most popular Pokemon of the day sourced from gamepress.gg

# API URL
https://popular-pokemon.herokuapp.com/popular

Sample output
```
{
	"lastUpdated": "2021-03-06T03:56:57.180Z",
	"pokemon": [
		{
			"dex": 663,
			"speciesName": "Talonflame",
			"speciesId": "talonflame",
			"baseStats": { "atk": 176, "def": 155, "hp": 186 },
			"types": ["fire", "flying"],
			"fastMoves": ["PECK", "FIRE_SPIN", "STEEL_WING", "INCINERATE"],
			"chargedMoves": [
				"BRAVE_BIRD",
				"FIRE_BLAST",
				"FLAME_CHARGE",
				"HURRICANE"
			],
			"eliteMoves": ["INCINERATE"],
			"defaultIVs": {
				"cp500": [8.5, 5, 13, 12],
				"cp1500": [26, 5, 10, 7],
				"cp2500": [40, 15, 15, 15]
			},
			"searchPriority": 3
		},
		{
			"dex": 661,
			"speciesName": "Fletchling",
			"speciesId": "fletchling",
			"baseStats": { "atk": 95, "def": 80, "hp": 128 },
			"types": ["normal", "flying"],
			"fastMoves": ["PECK", "QUICK_ATTACK"],
			"chargedMoves": ["AERIAL_ACE", "HEAT_WAVE", "SWIFT"],
			"defaultIVs": {
				"cp500": [24.5, 5, 15, 7],
				"cp1500": [40, 15, 15, 15],
				"cp2500": [40, 15, 15, 15]
			}
		},
		{
			"dex": 618,
			"speciesName": "Stunfisk (Galarian)",
			"speciesId": "stunfisk_galarian",
			"baseStats": { "atk": 144, "def": 171, "hp": 240 },
			"types": ["ground", "steel"],
			"fastMoves": ["MUD_SHOT", "METAL_CLAW"],
			"chargedMoves": [
				"EARTHQUAKE",
				"FLASH_CANNON",
				"MUDDY_WATER",
				"ROCK_SLIDE"
			],
			"tags": ["galarian"],
			"defaultIVs": {
				"cp500": [8.5, 10, 15, 10],
				"cp1500": [26, 7, 15, 6],
				"cp2500": [40, 15, 15, 15]
			},
			"searchPriority": 20
		}
    ]
}
```