class ItemsController < ApplicationController

  def index
    @items = Item.all
    render json: @items
  end

  def show
    @item = Item.find_by(id: params[:id])
    render json: @item
  end

  def create
    @item = Item.create(item_params)
    render json: @item
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render json: @item
    else
      render json: {errors: @item.errors.full_messages}, status: 422
    end
  end

  def destroy
    @item = Item.find_by(id: params[:id])
    @item.destroy
    render json: @item
  end

  private

  def item_params
    params.require(:item).permit(:id, :name, :starting_price, :current_price, :lister, :last_bidder)
  end
end
