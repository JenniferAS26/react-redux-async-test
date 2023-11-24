import axios from 'axios'
import { setCharacters, setUser } from './reducer'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseconfig'

export const login = ( email, password ) => {
  return async ( dispatch ) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log('response', response.user)
      dispatch(setUser(response.user))
    } catch (error) {
      console.warn(error)
    }
  }
}

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 1000,
})

export const getCharactersFromApi = () => {
  return async ( dispatch ) => {
    try {
      const response = await instance.get('/character')
      dispatch(setCharacters(response.data.results))
    } catch (error) {
      console.warn(error);
    }
  }
}
