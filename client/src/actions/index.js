const actions = {
    AddBook: (title, description, image_url) => {
        return {
            type: 'ADD_BOOK',
            title, 
            description, 
            image_url
        }
    }
}; 
