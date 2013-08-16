var app = app || {};

// Our only model.
app.Post = Backbone.Model.extend({
  // Use slug instead of id to refer to these objects.
  idAttribute: 'slug',
  urlRoot: '/posts',

  defaults: {
    title: 'New post',
    slug: 'new-post',
    content: 'content',
    comments: []
  },

  fetchComments: function () {
    var post = this;
    post.comments = new app.Comments();
    post.comments.post_id = post.get('id');
    post.comments.fetch({
      success: function () {
        post.trigger('comments');
      }
    });
  }
});
