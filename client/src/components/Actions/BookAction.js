import uuid from 'uuid';

const actions = {
    AddBook: (title, description, image_url) => {
        return {
            type: 'ADD_BOOK',
            id: uuid.v4(),
            title, 
            description, 
            image_url
        };
    }
};

export const CREATE_POST = "create_post";

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
        .catch(err => console.log("Error of: ", err))
  }