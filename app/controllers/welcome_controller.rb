class WelcomeController < ApplicationController
  def index
  end

  # def show
  #   render partial: 'product', locals: { product: @product }
  # end
  #
  def form
    @product = params[:id] ? Product.find(params[:id]) : Product.new
    render partial: 'form'
  end

  # def create
  #   @product = Product.new(product_params)
  #   if @product.save
  #     render json: @product
  #   else
  #     render_error(@product)
  #   end
  # end
  #
  # def update
  #   if @product.update(product_params)
  #     render json: @product
  #   else
  #     render_error(@product)
  #   end
  # end
  #
  # def destroy
  #   @product.destroy
  #   render json: { message: 'Removed' }, status: :ok
  # end
  #
  # private
  #   def set_product
  #     @product = Product.find(params[:id])
  #   end
  #
  #   def product_params
  #     params.require(:product).permit(:name, :description)
  #   end
end
