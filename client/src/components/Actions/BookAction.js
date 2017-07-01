const actions = {
    AddBook: (title, description, image_url) => {
        return {
            type: 'ADD_BOOK',
            id: uuid.v4(),
            title, 
            description, 
            image_url
        }
    }
};