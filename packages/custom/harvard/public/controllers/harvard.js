(function() {
    'use strict';

    /* jshint -W098 */

    function HarvardController($scope, Global, Harvard, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'harvard'
        };

        $scope.checkCircle = function() {
            Harvard.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.harvard')
        .controller('HarvardController', HarvardController);

    HarvardController.$inject = ['$scope', 'Global', 'Harvard', '$stateParams'];

})();
