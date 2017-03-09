// State1 controller
(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['MovieService', '$stateParams'];

    /* @ngInject */
    function MovieController(MovieService, $stateParams) {
        var vm = this;
        vm.title = 'MovieController';
        vm.getMovie = getMovie;
        vm.movies = " ";

        // Function to get movie based on the movie title searched in the input
        function getMovie() {

            MovieService.getMovie(vm.movieTitleInput).then(function(response) {

                //Pulls movie data
                vm.movies = response.data.Search;


            }, function(error) {
                console.log(error);
            });
        };

    };
})();
