import { setCharacters } from './reducer'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 1000,
})

export const getCharactersFromApi = () => {
  return async ( dispatch ) => {
    try {
      const response = await instance.get('/character')
      console.log(response.data.results)
      dispatch(setCharacters(response.data.results))
    } catch (error) {
      console.warn(error);
    }
  }
}
