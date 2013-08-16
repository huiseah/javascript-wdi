var app = app || {};

app.Comment = Backbone.Model.extend({
  schema: {
    post_id: {
      type: 'Hidden'
    },
    twaddle: {
      type: 'TextArea'
    }
  },


  url: function() {
    return '/posts/' + this.get('post_id') + '/comments';
  },

  parse: function (data) {
    return data;
  }
});