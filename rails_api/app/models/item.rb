class Item < ApplicationRecord
  validates :current_price, :numericality => { :greater_than => :current_price_was }, :on => :update

end
