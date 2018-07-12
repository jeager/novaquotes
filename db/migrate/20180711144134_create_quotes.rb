class CreateQuotes < ActiveRecord::Migration[5.0]
  def change
    create_table :quotes do |t|
      t.text :description
      t.belongs_to :user, foreign_key: true
      t.string :channel_id
      t.string :channel_name
      t.string :team_id
      t.string :team_domain

      t.timestamps
    end
  end
end
