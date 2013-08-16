class Post < ActiveRecord::Base
  has_many :comments
  attr_accessible :content, :slug, :title
end
