(function () {
    'use strict';

    module.exports = function (Harvard, app, auth, database, circles) {

        // Load underscore to filter JSON object
        var _ = require('underscore');
        
        // For access control (Not implemented)
        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');

        // Instructor route
        app.get('/api/courses/instructor/:name', function (req, res) {
            // Return filtered list where instructor contains :name
            res.send(_.filter(app.get('courses'), function (course) {
                // Filter only terms whose one of instructors contains :name
                return !_.isEmpty(_.filter(course.terms, function (term) {
                    return !_.isEmpty(_.filter(term.instructors, function (instructor) {
                        // Filter only instructors whose name contains req.params.name (Case insensitive)  
                        return (instructor.toLowerCase().indexOf(req.params.name.toLowerCase()) > -1);
                    }));
                }));
            }));
        });
        
        // Area route
        app.get('/api/courses/area/:area', function (req, res) {
            //Return filtered list where area is matched with :area
            res.send(_.filter(app.get('courses'), function (course) {
                // Filter only matched area (Case sensitive)
                return (course.course_area == req.params.area);
            }));
        });

    };
})();
