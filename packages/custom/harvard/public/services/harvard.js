(function() {
    'use strict';

    function Harvard($http, $q) {
        return {
            name: 'harvard',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/harvard/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.harvard')
        .factory('Harvard', Harvard);

    Harvard.$inject = ['$http', '$q'];

})();
