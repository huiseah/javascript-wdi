var app = app || {};

// Not much to talk about here.
app.Posts = Backbone.Collection.extend({
  model: app.Post,
  url: '/posts'
});
