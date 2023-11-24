import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = configureStore({
  reducer: {
    reducer // aqui podemos listar varios reducers y tener en cuenta que es con el name que le asignamos al slice
  },
  middleware: [thunk]
})

export default store