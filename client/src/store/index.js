import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import BooksReducer from '../reducers/reducer_books'

const reducer = combineReducers({
  posts: BooksReducer,
  form: formReducer
})

export default createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
)