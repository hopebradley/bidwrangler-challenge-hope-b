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
    # headers['Access-Control-Allow-Origin'] = '*'
    @item = Item.create(item_params)
    render json: @item
  end

  def update
    @item = Item.find_by(id: params[:id])
    @item.update(item_params)
    render json: @item
  end

  def destroy
    @item = Item.find_by(id: params[:id])
    @item.destroy
    render json: @item
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :lister)
  end
end
