import React from 'react';
import {render} from 'react-dom';
import './index.css';
import PokemonList from './components/pokemon-list'
import store from './store'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <PokemonList/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
