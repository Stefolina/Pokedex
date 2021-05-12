let charmander;
        let pikachu;
        let venusaur;
        let pokemons;

        /**
         * loading data from API
        */
         async function loadPokemons() {
            let charmanderURL = 'https://pokeapi.co/api/v2/pokemon/charmander';
            let charmanderResponse = await fetch(charmanderURL);
            charmander = await charmanderResponse.json();

            let pikachuURL = 'https://pokeapi.co/api/v2/pokemon/pikachu';
            let pikachuResponse = await fetch(pikachuURL);
            pikachu = await pikachuResponse.json();

            let venusaurURL = 'https://pokeapi.co/api/v2/pokemon/venusaur';
            let venusaurResponse = await fetch(venusaurURL);
            venusaur = await venusaurResponse.json();

            fillingPokemons();
            showPokemonInfo();
        }


        /**
         * selected Infos from API
        */
        function fillingPokemons() {
            pokemons = [
                {
                    url: 'https://pokeapi.co/api/v2/pokemon/charmander',
                    name: charmander['name'],
                    pic: charmander['sprites']['front_default'],
                    height: '0,60m',
                    weight: '8,5kg',
                    abilities: 'Blaze, Solar-Power',
                    cathegory: 'lizard-Pokémon'
                },
                {
                    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
                    name: pikachu['name'],
                    pic: pikachu['sprites']['front_default'],
                    height: '0,40m',
                    weight: '6,0kg',
                    abilities: 'statics, lightning rod',
                    cathegory: 'mouse-Pokémon'
                },
                {
                    url: 'https://pokeapi.co/api/v2/pokemon/venusaur',
                    name: venusaur['name'],
                    pic: venusaur['sprites']['front_default'],
                    height: '2,4m',
                    weight: '155,5kg',
                    abilities: 'Chlorophyll, greasy, emergency-fertilizer',
                    cathegory: 'seeds-Pokémon'
                }
            ];
       }

        /**
         * showing the Pokemon overview
        */
        function showPokemonInfo() {
            for (let index = 0; index < pokemons.length; index++) {
                const currentPokemon = pokemons[index];

                document.getElementById('pokedexArea').innerHTML += `<div class="pokedex" onclick="showOverlay(${index})">
                <h1 id="pokemonName">${currentPokemon['name']}</h1>
                <img id="pokemonPic" src="${currentPokemon['pic']}">
                </div>
                `;
            }
        }

         /**
         * Open Overlay with current Pokemondata
        */
       function showOverlay(index) {
           document.getElementById('overlay').classList.remove('d-none');
           document.getElementById('overlay').classList.add('overlay');
           document.getElementById('overlayContent').classList.remove('d-none');
           document.getElementById('overlayContent').classList.add('overlay-content');
           
           document.getElementById('overlayContent').innerHTML = `
            <div class="pokecard" id="pokecard">
                <img src="img/ball.svg" class="logocard">
                <h1>${pokemons[index]['name']}</h1>
                <img src="img/line.png" class="line">
                <img src="${pokemons[index]['pic']}" class="pokemon-pic">

                <img src="img/waage.svg" class="minilogos"><p>Height:</p><h3>${pokemons[index]['height']}</h2>
                <img src="img/maßband.svg" class="minilogos"><p>Weight:</p> <h3>${pokemons[index]['weight']}</h2>
                <img src="img/muckis.svg" class="minilogos"><p>Abilities:</p> <h3>${pokemons[index]['abilities']}</h2>
                <img src="img/typ.svg" class="minilogos"><p>Cathegory:</p> <h3>${pokemons[index]['cathegory']}</h2>

                <img src="img/X.svg" class="X" onclick="closeOverlay()">
            </div>
           `;
       }


       /**
        * closing overlay with Pokemondata
       */
       function closeOverlay() {
            document.getElementById('overlay').classList.add('d-none');
            document.getElementById('overlay').classList.remove('overlay');
       }