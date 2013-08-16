var app = app || {};

app.AppRouter = Backbone.Router.extend({
  // Only 2 routes!
  routes: {
    '': 'index',
    'posts/:slug': 'getPost'
  },
  initialize: function (options) {
    this.options = options;
    // Lorem ipsum posts. Make these more interesting.
    this.posts = new app.Posts([
      new app.Post({title: 't1', slug: 't1', content: 'Test one'}),
      new app.Post({title: 't2', slug: 'read-my-sex-post', content: 'Test two'}),
      new app.Post({title: 't3', slug: 't3', content: 'Test three'}),
      new app.Post({title: 't4', slug: 't4', content: 'Test four'})
    ]);
  },

  // Init the app and show the list of blog posts.
  index: function () {
    var appView = new app.AppView({collection: this.posts});
    appView.render();
  },

  // Show a specific post.
  getPost: function (slug) {
    var post = this.posts.get(slug);
    new app.PostView({model: post});
  }
});