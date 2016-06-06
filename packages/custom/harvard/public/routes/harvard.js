(function() {
    'use strict';

    function Harvard($stateProvider) {
        $stateProvider.state('harvard example page', {
            url: '/harvard/example',
            templateUrl: 'harvard/views/index.html'
        }).state('harvard circles example', {
            url: '/harvard/example/:circle',
            templateUrl: 'harvard/views/example.html'
        });
    }

    angular
        .module('mean.harvard')
        .config(Harvard);

    Harvard.$inject = ['$stateProvider'];

})();
