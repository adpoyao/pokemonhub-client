import React, {Component} from 'react'
import { addPokeData } from '../actions'
import store from '../store'
import { connect } from 'react-redux'

export class AddPokemon extends Component {
handleAddPokeData(e){
  e.preventDefault();
  let pokeData = 
  {
    trainer: this.menu.value,
    pokemon: this.input.value
  }
  store.dispatch(addPokeData(pokeData))
  this.input.value = ''
}

  render() {
    return (
      <form onSubmit={(e)=>this.handleAddPokeData(e)}>
        <label htmlFor="trainer">Trainer Name: </label>
        <select name="trainer" id='trainer' defaultValue="Eddie" ref={input => this.menu = input} required>
						<option value="Eddie">Eddie</option>
						<option value="Andy">Andy</option>
        </select>
        <label htmlFor="pokemonEntry">Which Pokemon was caught? </label>
        <input
          type="text" 
          name="pokemonEntry" 
          id="pokemonEntry" 
          className="pokemonEntry" 
          ref={input => this.input = input}
          placeholder="Enter Pokemon Name" />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}


export default connect()(AddPokemon)