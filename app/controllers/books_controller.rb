class BooksController < ApplicationController
    def index
        render json: Book.all.map{|b| {
                                        id: b.id, 
                                        title: b.title, 
                                        image_url: b.image_url,
                                        votes: b.upvote_count,
                                        description: b.description
                                      }
                                 }
    end
    
    def create
        book = Book.create(book_params)
        render json: book
    end

private

    def book_params
        params.require(:book).permit(:title, :description, :image_url)
    end
    
end
