class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.integer :stars
      t.text :review

      t.timestamps
    end
  end
end
