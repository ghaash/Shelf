export const ADD_BOOK = "add_book";

export function createBook(newBook) {
    return fetch('/books', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook) 
        })
        .then(response => response.json())
        .then(book => this.setState({ 
          books: this.state.books.concat(book)
        }))
        .catch(err => console.log("Error of: ", err));
         
  }