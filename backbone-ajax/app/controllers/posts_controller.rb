class PostsController < ApplicationController

  respond_to :html, :json

  def index
    @posts = Post.select([:title, :slug])
    respond_with(@posts)
  end

  def show
    @post = Post.find_by_slug(params[:id]) # Cheers, Dan!
    respond_with(@post)
  end

end