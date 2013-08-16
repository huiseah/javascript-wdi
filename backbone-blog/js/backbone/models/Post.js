var app = app || {};

// Our only model.
app.Post = Backbone.Model.extend({
  // Use slug instead of id to refer to these objects.
  idAttribute: 'slug',

  defaults: {
    title: 'New post',
    slug: 'new-post',
    content: 'content'
  }
});