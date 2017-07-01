export default function manageBook(state = {
  books: [],
}, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return { books: state.books.concat(action.book.text) };
 
    default:
      return state;
  }
}