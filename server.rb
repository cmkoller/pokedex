require 'sinatra'
require 'pg'
require 'rake'
require 'pokegem'
require 'json'
require 'net/http'

require_relative 'models/pokemon'

get '/' do
  erb :index
end

post '/' do
  if params[:clear]
    erb :index
  else
    id = params[:poke_id]
    @pokemon = Pokemon.new(id)
    erb :index
  end
end
