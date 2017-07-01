class CreateWishlists < ActiveRecord::Migration[5.0]
  def change
    create_table :wishlists do |t|
      t.string :wishlist_title
      t.text :wishlist_description
      t.string :wishlist_image_url

      t.timestamps
    end
  end
end
