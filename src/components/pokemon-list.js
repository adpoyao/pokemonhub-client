import React, { Component } from 'react'
import { fetchPokeData } from '../actions'
import { connect } from 'react-redux'

export class PokemonList extends Component {
  ComponentDidMount() {
    this.props.dispatch(fetchPokeData())
  }

  render() {
    return <div>Test</div>
  //   const pokeData = this.props.pokeData.map((data, index) => {
  //     const pokemonHeld = data.pokemons.map((pokemon, index) => {
  //       return <li key={index} index={index}>{pokemon}</li>
  //     })
  //     return (
  //     <div>
  //       <li key={index} index={index}>
  //         Trainer: {data.trainer}
  //       <br></br>
  //         Pokemon: 
  //         <ul>
  //           {pokemonHeld}
  //         </ul>
  //       </li>
  //       <br></br>
  //     </div>
  //     )
  // });
  //   return (
  //     <div>
  //       <ul>
  //         {pokeData}
  //       </ul>
  //     </div>
    // )
  }
}

export default connect()(PokemonList)