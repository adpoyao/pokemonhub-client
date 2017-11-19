import * as actions from '../actions'

const initialState = {
  pokedata: [],
  loading: false,
  error: null
};

const pokemon = (state=initialState, action) => {
  switch(action.type) {
    case(''):
      return {}
    default:
      return state;
  }
}

export default pokemon