class AddBookIdToVotes < ActiveRecord::Migration[5.0]
  def change
    add_column :votes, :book_id, :integer
  end
end
