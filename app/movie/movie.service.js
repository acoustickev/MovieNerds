(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieService', MovieService);

    MovieService.$inject = ['$http', '$q'];

    /* @ngInject */
    function MovieService($http, $q) {
        var service = {
            getMovie: getMovie,
            getMovieDetails: getMovieDetails
        };

        return service;

        ////////////////

        // Funcion to grab data for State1 
        function getMovie(movieTitleInput) {

            var defer = $q.defer();

            // Get data from OMBD API for State1
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    s: movieTitleInput
                }

                //Checks if the response from OMBD API  is an object. If yes, provide the object to the controller. If no, provide the controller with a reason why
            }).then(function(response) {
                    if (typeof response.data === 'object') { //checks to see if the object being retrieved from the 'GET' contains an 'object'
                        defer.resolve(response); //if there is data response it resolves it and lets it go
                    } else {
                        defer.reject(response); // rejects go to the error path in the controller. This handles an error condition that would not be thrown by the webserver. In other words an error condition we want to catch.
                    }
                },
                function(error) { //additional function for the error path. This would handle an error that was generated from the webserver
                    defer.reject(error);
                });
            return defer.promise;
        }

        // Funcion to grab data for State2
        function getMovieDetails(imdb) {

            var defer = $q.defer();

            // Get data from OMBD API for State2
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    i: imdb
                }

                //Checks if the response from OMBD API is an object. If yes, provide the object to the controller. If no, provide the controller with a reason why
            }).then(function(response) {
                    if (typeof response.data === 'object') { //checks to see if the object being retrieved from the 'GET' contains an 'object'
                        defer.resolve(response); //if there is data response it resolves it and lets it go
                    } else {
                        defer.reject(response); // rejects go to the error path in the controller. This handles an error condition that would not be thrown by the webserver. In other words an error condition we want to catch.
                    }
                },
                function(error) { //additional function for the error path. This would handle an error that was generated from the webserver
                    defer.reject(error);
                });
            return defer.promise; //return the defer object promise with or without the reject or resolve
        }
    };
})();
