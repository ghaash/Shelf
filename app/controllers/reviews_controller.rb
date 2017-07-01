class ReviewsController < ApplicationController
    def index
        render json: Review.all
    end
    
    def create
        review = Review.create(review_params)
        render json: review
    end

private

    def review_params
        params.require(:review).permit(:title, :stars, :reviews)
    end
     
end