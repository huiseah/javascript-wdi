var app = app || {};

app.CommentNewView = Backbone.View.extend({
  el: '.new_comment_form',
  initialize: function () {

  },

  events: {
    'click button': 'saveComment'
  },

  render: function () {
    this.$el.html(app.templates.commentNew);

    this.form = new Backbone.Form({model: this.model});
    this.$el.prepend(this.form.render().el);

    this.$el.find('form fieldset').append('<button>Post</button>');

  },

  saveComment: function () {
    this.form.commit();
    this.model.save();

    this.$el.find('form fieldset').fadeOut(function () {
      $(this).remove();
    });

    this.model.set('created_at', Date());
    var comment = new app.CommentListView({model: this.model});
    $('.comments').append(comment.render().el);

    return false;
  }
});