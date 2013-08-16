var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'change': this.render,
    'click': 'view'
  },

  initialize: function () {
  },

  // Stick this new list item in the page.
  render: function () {
    var template = Handlebars.compile( app.templates.blogList );
    this.$el.html( template(this.model.toJSON()) );

    // Returning this lets us chain our code.
    return this;
  },

  view: function () {
    // TARUN HOMEWORK: Try it without the true.
    app.router.navigate('posts/' + this.model.get('slug'), true);
    return false;
  }
});
