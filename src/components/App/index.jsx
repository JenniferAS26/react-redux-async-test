import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersFromApi, login, logout } from '../../store/actions'
import { setCharacterSelected } from '../../store/reducer'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  // const characters = useSelector(( store ) => store.reducer.characters)
  // const character = useSelector(( store ) => store.reducer.characterSelected)
  const user = useSelector(( store ) => store.reducer.user)

  // const selectCharacter = ( character ) => {
  //   dispatch(setCharacterSelected(character))
  // }

  const handleSubmit = () => {
    dispatch(login(email, password))
  }

  // useEffect(() => {
  //   dispatch(getCharactersFromApi())
  // }, [dispatch])


  return (<>
    {/* <h1>El personaje seleccionado es: {character?.name} </h1>
    <div>
      {
        characters?.map(( character, index ) => (
          <p 
            key={index}
            onClick={() => selectCharacter(character)}
          >
            {character.name}
          </p>
        ))
      }
    </div> */}
    <form>
      <input 
        type='email' 
        placeholder='Enter your email'
        name='email' 
        onChange={(event) => setEmail(event.target.value)} 
      />
      <input 
        type='password' 
        placeholder='Enter your password' 
        name='password' 
        onChange={(event) => setPassword(event.target.value)} 
      />
      <button type='button' onClick={() => handleSubmit()}>send</button>
      <button type='button' onClick={() => dispatch(logout())}>sign out</button>
    </form>
    <h1>El usuario loggeado es {user?.email || 'no hay usuario loggeado'}</h1>
  </>)
}

export default App
