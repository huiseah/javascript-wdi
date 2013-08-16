var app = app || {};

// View for a single post.
app.PostView = Backbone.View.extend({
  el: '#main', // Where this is going to end up on the page.
  initialize: function () {

  this.model.on('change', this.render, this);
  this.model.on('comments', this.renderComments, this);

  },

  render: function () {
    var template = Handlebars.compile(app.templates.blogView);
    this.$el.html( template(this.model.toJSON()) );

    this.comments = this.$el.find('.comments');
    this.model.fetchComments();

    this.post_id = this.model.get('id');
    var view = this;

    this.$el.find('.new_comment').on('click', function () {
      view.renderCommentForm(view.post_id);
    });

    return this;
  },

  renderComments: function () {
   this.model.comments.each(function(model) {
      var view = new app.CommentListView({model: model});
      this.comments.append(view.render().el);
    }, this);
  },

  renderCommentForm: function (post_id) {
    $(this).remove();
    var form = new app.CommentNewView({model: new app.Comment({post_id: post_id})}).render();
  }
});