class WishlistsController < ApplicationController
    def index
        render json: Wishlist.all
    end
    
    def create
        wishlist = Wishlist.create(wishlist_params)
        render json: wishlist
    end

private

    def wishlist_params
        params.require(:wishlist).permit(:wishlist_title, :wishlist_description, :wishlist_image_url)
    end
     
end