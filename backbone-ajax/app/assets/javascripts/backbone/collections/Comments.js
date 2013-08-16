var app = app || {};

app.Comments = Backbone.Collection.extend({
  model: app.Comment,

  post_id: null,

  url: function() {
    return '/posts/' + this.post_id + '/comments';
  },

  parse: function(data) {
    return data;
  }
});