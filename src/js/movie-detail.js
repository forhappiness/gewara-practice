
var detailApp=angular.module("movieDetail",[]);
    detailApp.controller("detailcontroller",['$scope', '$http','$routeParams',
        function ($scope,$http,$routeParams) {
            $http.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id + '?callback=doubanMovieDetailCallback')
                window.doubanMovieDetailCallback = function(data) {
                    $scope.detail = data;
                };
    }]);