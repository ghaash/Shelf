class CreateApis < ActiveRecord::Migration[5.0]
  def change
    create_table :apis do |t|
      t.string :title
      t.text :summary

      t.timestamps
    end
  end
end
