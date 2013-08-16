var app = app || {}

app.CommentListView = Backbone.View.extend({
  tagName: 'li',

  events:{
    'change': this.render
  },

  initialize: function() {
  },

  render: function() {
    var template = Handlebars.compile(app.templates.commentList);
    this.$el.html(template(this.model.toJSON()));
    return this;
  }

});
