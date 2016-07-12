class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
    	t.string :title
    	t.text :content
    	t.references :user
    end
  end
end
