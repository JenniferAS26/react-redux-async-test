import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characters: [],
  characterSelected: null, 
  user: null
}

const charactersSlice = createSlice({
  name: 'reducer', // nombre del reducer
  initialState,
  reducers: { // hablamos de los modificadoresd de estado
    setCharacters: ( state, action ) => {
      state.characters = action.payload
    },
    setCharacterSelected: ( state, action ) => {
      state.characterSelected = action.payload
    },
    setUser: ( state, action ) => {
      state.user = action.payload
    }
  }
})

export const { setCharacters, setCharacterSelected, setUser } = charactersSlice.actions
export default charactersSlice.reducer