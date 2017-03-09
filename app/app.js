(function() {
    'use strict';

    var app = angular.module('app', ['ui.router']); //ui-router needs to be a global dependancy

    //configure (url-routerProvider, stateProvider)
    app.config(function($stateProvider, $urlRouterProvider) {

        //default if any unmatched url's
        $urlRouterProvider.otherwise("/state1");

        //different states url's defined in application
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "app/partials/state1.html",
                controller: 'MovieController',
                controllerAs: 'vm'
            })

        .state('state2', {
            url: "/state2/:movieDetailId",
            templateUrl: "app/partials/state2.html",
            controller: 'DetailsController',
            controllerAs: 'detail'
        })
    });
})();
