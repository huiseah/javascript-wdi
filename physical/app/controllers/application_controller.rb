class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :authenticate

  private
  def authenticate
  	return unless session[:user_id]
  	@auth = User.find(session[:user_id]) 
  	unless @auth
  		session[:user_id] = nil
  		redirect_to root_url
  	end
  end
end
