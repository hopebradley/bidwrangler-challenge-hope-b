class AddCurrentPriceToItems < ActiveRecord::Migration[5.2]
  def change
    rename_column :items, :price, :starting_price
    add_column :items, :current_price, :decimal, precision: 10, scale: 2
  end
end
