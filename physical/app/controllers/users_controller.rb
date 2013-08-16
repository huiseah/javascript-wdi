class UsersController < ApplicationController
	def new
		@user = User.new
	end

	def create
		User.create(params[:user])
		@users = User.order(:email)
		respond_to do |format|
			format.html { redirect_to(users_path) }
			format.js  { render :create }
		end
	end
end

