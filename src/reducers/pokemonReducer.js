import * as actions from '../actions'

const initialState = {
  pokeData: [],
  loading: false,
  error: null
};

const pokemon = (state=initialState, action) => {
  switch(action.type) {
    case actions.FETCH_POKEDATA_REQUEST || actions.ADD_POKEDATA_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false
      })
    case actions.FETCH_POKEDATA_ERROR || actions.ADD_POKEDATA_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: true
      })
    case actions.FETCH_POKEDATA_SUCCESS:
      return Object.assign({}, state, {
        pokeData: [...action.pokeData]
      })
    case actions.ADD_POKEDATA_SUCCESS:
      return Object.assign({}, state, {
        pokeData: [...action.pokeData]
      })
    default:
      return state;
  }
}

export default pokemon