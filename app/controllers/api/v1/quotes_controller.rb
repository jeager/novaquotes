class Api::V1::QuotesController < ApplicationController
  before_action :set_quote, only: [:show, :update, :destroy]

  # GET /quotes
  def index
    @quotes = Quote.all

    render json: @quotes.to_json(:include => :user)
  end

  # GET /quotes/1
  def show
    render json: @quote
  end

  # POST /quotes
  def create
    @quote = Quote.new
    @quote.description = params[:text]
    @quote.channel_id = params[:channel_id]
    @quote.channel_name = params[:channel_name]
    @quote.team_id = params[:team_id]
    @quote.team_domain = params[:team_domain]
    @quote.parse_quote('@'+params[:user_name])
    if @quote.save
      render json: "Quote criada com sucesso, visualize ela em: ", status: :created
    else
      render json: @quote.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /quotes/1
  def update
    if @quote.update(quote_params)
      render json: @quote
    else
      render json: @quote.errors, status: :unprocessable_entity
    end
  end

  # DELETE /quotes/1
  def destroy
    @quote.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quote
      @quote = Quote.find(params[:id])
    end
end
