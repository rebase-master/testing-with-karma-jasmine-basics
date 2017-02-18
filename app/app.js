(function() {
    'use strict';

    angular.module('karine', [
            'ui.router'
        ])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
        });
})();