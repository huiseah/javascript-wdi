class HomeController < ApplicationController

  respond_to :html, :json

  def index
    @posts = Post.all
    respond_with(@posts)
  end

end
