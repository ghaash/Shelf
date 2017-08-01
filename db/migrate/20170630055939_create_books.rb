class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
        t.string :title
        t.text :description
        t.string :image_url
        t.integer :votes, default: 0
        
        t.timestamps
    end
  end
end
