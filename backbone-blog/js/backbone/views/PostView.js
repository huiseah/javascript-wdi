var app = app || {};

 // View for a single post.
app.PostView = Backbone.View.extend({
  el: '#main', // Where this is going to end up on the page.
  initialize: function () {
    // Weird. We're rendering from the initialize(). Probably don't do this.
    var template = Handlebars.compile( app.templates.blogView );
    this.$el.html( template(this.model.toJSON()) );
  }
});
