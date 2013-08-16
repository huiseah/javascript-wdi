var app = app || {};

// View for the entire app.
app.AppView = Backbone.View.extend({
  el: '#main', // Where this is going to end up on the page.
  initialize: function () {
    this.$el.html( app.templates.appView ); // Not using Handlebars so no need to compile.
    this.list = $('#posts'); // Caching the #posts for later use.

    this.collection.on('add', this.renderItem, this);

    if (this.collection.length === 0) {
      this.collection.fetch();
    }
  },

  renderItem: function(model) {
    var view = new app.PostListView({model: model});
    view.render();
    this.list.append(view.el);
  },

  render: function () {
    this.collection.each(function (post) {
      this.renderItem(post)
    }, this); // Pass in `this` as the scope of our each().
    return this; // Allow chaining again.
  }
});