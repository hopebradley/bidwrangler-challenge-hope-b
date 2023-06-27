class AddLastBidderNameToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :last_bidder, :string
  end
end
