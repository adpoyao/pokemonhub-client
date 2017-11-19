import {API_BASE_URL} from '../config'

//SYNC
export const FETCH_POKEDATA_REQUEST = 'FETCH_POKEDATA_REQUEST'
export const fetchPokeDataRequest = () => {
  type: FETCH_POKEDATA_REQUEST
}

export const FETCH_POKEDATA_SUCCESS = 'FETCH_POKEDATA_SUCCESS'
export const fetchPokeDataSuccess = () => {
  type: FETCH_POKEDATA_SUCCESS
}

export const FETCH_POKEDATA_ERROR = 'FETCH_POKEDATA_ERROR'
export const fetchPokeDataError = () => {
  type: FETCH_POKEDATA_ERROR
}

//ASYNC
export const FETCH_POKEDATA = 'FETCH_POKEDATA'
export const fetchPokeData = () => dispatch => {
  fetch(`${API_BASE_URL}/pokemon`)
    .then(res => res.json())
    .then(pokeData => console.log(pokeData))
    .catch(error => console.log(error))
}