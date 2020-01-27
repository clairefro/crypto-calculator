class CurrenciesController < ApplicationController
  def index
  end

  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    render json: { currencies: @currencies }
  end

  # takes in currency id and amount owned, returns calculations
  def calculate
    amount = params[:amount]
    render json: {
      currency: currency,
      current_price: current_price,
      amount: amount,
      value: currency.calculate_value
    }
  end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end
end
