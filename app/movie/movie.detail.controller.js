// State2 controller
(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['MovieService', '$stateParams'];

    /* @ngInject */
    function DetailsController(MovieService, $stateParams) {
        var detail = this;
        detail.title = 'DetailsController';

        activate();

        // Function to get details of selected movie in state1 
        function activate() {

            MovieService.getMovieDetails($stateParams.movieDetailId).then(function(response) {

                //Pulls movie data
                detail.movieDetail = response.data;

            }, function(error) {
                console.log(error);
            });
        }
    };
})();
