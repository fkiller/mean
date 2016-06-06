'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Harvard = new Module('harvard');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Harvard.register(function (app, auth, database, circles) {
    var _ = require('underscore');

    //We enable routing. By default the Package Object is passed to the routes
    Harvard.routes(app, auth, database, circles);

    //Load JSON
    var courses = require(__dirname + '/Courses.json');

    //Embed index id into entry (for performance)
    courses = _.map(courses, function (course, id) {
        course.id = id;
        return course;
    });

    app.set('courses', courses);

    //We are adding a link to the main menu for all authenticated users
    Harvard.menus.add({
        title: 'harvard example page',
        link: 'harvard example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /**
      //Uncomment to use. Requires meanio@0.3.7 or above
      // Save settings with callback
      // Use this for saving data from administration pages
      Harvard.settings({
          'someSetting': 'some value'
      }, function(err, settings) {
          //you now have the settings object
      });
  
      // Another save settings example this time with no callback
      // This writes over the last settings.
      Harvard.settings({
          'anotherSettings': 'some value'
      });
  
      // Get settings. Retrieves latest saved settigns
      Harvard.settings(function(err, settings) {
          //you now have the settings object
      });
      */

    return Harvard;
});
