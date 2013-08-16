# Backbone.js with AJAX
The goal of this lab is to implement a basic Backbone.js app with a remote data source.  What you have to start with is a basic rails app with some seed data, templates, and a blog post model and route.  What needs to happen next is to implement a backbone.js framework to pull the JSON data from the backend and dispay on the front.

1. First, bundle install the app, and setup the database
2. Investigate what you have, particularly in the app/controllers and app/assets/javascripts folders
1. You should find existing files in the app/assets/javascripts/backbone folder that will need to be populated
	1. Build the model
	2. Build the collection
	3. Create your basic views
	4. Implement a router
	5. Bootstrap the app and display the home view
3. Create a click event to navigate to an individual blog post
3. Refer to the Backbone.js documentation and the earlier non-ajax code for hints
	* The app should display 4 blog posts and be navigatable to view an individual post


###Bonus Exercise (idAttribute)
Change the app to use a blog's slug instead of id for navigation.  It looks prettier and is SEO friendly (for example, /posts/blog-post instead of /posts/3)
