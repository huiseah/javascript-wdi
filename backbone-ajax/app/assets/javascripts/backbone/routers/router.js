var app = app || {};

app.AppRouter = Backbone.Router.extend({
  // Only 2 routes!
  routes: {
    '': 'index',
    'posts/:slug': 'getPost'
  },
  initialize: function (options) {
    this.options = options;
  },

  // Init the app and show the list of blog posts.
  index: function () {
    new app.AppView({collection: new app.Posts()});
  },

  // Show a specific post.
  getPost: function (slug) {
    var post = new app.Post({slug: slug});
    app.postview = new app.PostView({model: post});
    post.fetch();
  }
});
