import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const [pokemon, setPokemon] = useState({});

  const [name, setName] = useState('');

  async function onNameFormSubmit(e) {
      e.preventDefault();
  

  const response = await fetch(url + name, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }

  });

  const data = await response.json();
  setPokemon(data);
  console.log(pokemon);

  setName('');

  }

  return (

    <div className="card mx-5 mt-5">
      <div className="card-header text-center">
        Pokemon Search
      </div>
      <div className="card-body">
        <form onSubmit={onNameFormSubmit}>
            <div className="input-group mb-3">
                <input
                value={name}
                onChange={(e) => {setName(e.target.value);}}
                className="form-control"
                placeholder="Enter The Pokemon's Name"
                ></input>
                <button className="btn btn-outline-primary" type="Submit" >
                    Submit
                </button>
            </div>
        </form>

        {Object.keys(pokemon).length > 0 ? (
          <div>
            <h2>The pokemon: <mark>{pokemon.name}</mark></h2>
            <h2>Abilities:</h2>
            <ul>
              {pokemon.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
            <h2>Picture:</h2>
            <img src={pokemon.sprites.front_default} className="img-thumbnail" alt={pokemon.name} />
          </div>
        ) : (
          <p>No Pokemon data to display.</p>
        )}
      </div> 
    </div>

  );
}

export default App;
