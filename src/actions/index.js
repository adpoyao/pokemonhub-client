import {API_BASE_URL} from '../config'

//SYNC
export const FETCH_POKEDATA_REQUEST = 'FETCH_POKEDATA_REQUEST'
export const fetchPokeDataRequest = () => ({
  type: FETCH_POKEDATA_REQUEST
})

export const FETCH_POKEDATA_SUCCESS = 'FETCH_POKEDATA_SUCCESS'
export const fetchPokeDataSuccess = (pokeData) => ({
  type: FETCH_POKEDATA_SUCCESS,
  pokeData
})

export const FETCH_POKEDATA_ERROR = 'FETCH_POKEDATA_ERROR'
export const fetchPokeDataError = () => ({
  type: FETCH_POKEDATA_ERROR
})

export const ADD_POKEDATA_REQUEST = 'ADD_POKEDATA_REQUEST'
export const addPokeDataRequest = () => ({
  type: ADD_POKEDATA_REQUEST
})

export const ADD_POKEDATA_SUCCESS = 'ADD_POKEDATA_SUCCESS'
export const addPokeDataSuccess = (pokeData) => ({
  type: ADD_POKEDATA_SUCCESS,
  pokeData
})

export const ADD_POKEDATA_ERROR = 'ADD_POKEDATA_ERROR'
export const addPokeDataError = () => ({
  type: ADD_POKEDATA_ERROR
})

//ASYNC
export const FETCH_POKEDATA = 'FETCH_POKEDATA'
export const fetchPokeData = () => dispatch => {
  dispatch(fetchPokeDataRequest());
  // return fetch(`${API_BASE_URL}/pokemon`)
  return fetch(`https://pokehub.herokuapp.com/api/pokemon`)
    .then(res => {
      if (!res.ok) {
        Promise.reject(res.statusText);
      }
      return res.json()})
    .then(pokeData => {
      dispatch(fetchPokeDataSuccess(pokeData))
    })
    .catch(err => {
      dispatch(fetchPokeDataError(err))
    })
}

export const ADD_POKEDATA = 'ADD_POKEDATA'
export const addPokeData = (pokeData) => dispatch => {
  dispatch(addPokeDataRequest(pokeData));
  // return fetch(`${API_BASE_URL}/pokemon`, {
  return fetch('https://pokehub.herokuapp.com/api/pokemon', {
			method: 'POST', 
			headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
			body: JSON.stringify(pokeData)
		})
    .then(res => {
      if (!res.ok) {
        Promise.reject(res.statusText);
      }
      return res.json()})
    .then(pokeData => {
      dispatch(addPokeDataSuccess(pokeData))
    })
    .then(() => {
      dispatch(fetchPokeData())
    })
    .catch(err => {
      dispatch(addPokeDataError(err))
    })
}