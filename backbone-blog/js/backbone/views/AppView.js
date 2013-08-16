var app = app || {};

 // View for the entire app.
app.AppView = Backbone.View.extend({
  el: '#main', // Where this is going to end up on the page.
  initialize: function () {
    this.$el.html( app.templates.appView ); // Not using Handlebars so no need to compile.
    this.list = $('#posts'); // Caching the #posts for later use.
  },

  render: function () {
    this.collection.each(function (post) {
      var view = new app.PostListView({ model: post} ); // New view for each post.
      this.list.append( view.render().el ); // Bung it on the end of the list.
    }, this); // Pass in `this` as the scope of our each().
    return this; // Allow chaining again.
  }
});