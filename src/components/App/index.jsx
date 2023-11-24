import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersFromApi } from '../../store/actions'
import { setCharacterSelected } from '../../store/reducer'

const App = () => {
  const dispatch = useDispatch()
  const characters = useSelector(( store ) => store.reducer.characters)
  const character = useSelector(( store ) => store.reducer.characterSelected)

  const selectCharacter = ( character ) => {
    dispatch(setCharacterSelected(character))
  }

  useEffect(() => {
    dispatch(getCharactersFromApi())
  }, [dispatch])


  return (<>
    <h1>El personaje seleccionado es: {character?.name} </h1>
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
    </div>
  </>)
}

export default App
