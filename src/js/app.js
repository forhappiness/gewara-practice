
var app = angular.module('gewara', [
    'ngRoute',
    'movies.hot',
    'cinema',
    'movieDetail'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/movies", {
            controller: 'moviesController',
            templateUrl: 'src/html/movies.html'
        })
        .when("/cinema", {
            controller: 'cinemaController',
            templateUrl: 'src/html/cinema.html'
        })
        .when("/:id",{
            controller:"detailcontroller",
            templateUrl:"src/html/movie-detail.html"
        })
        // .otherwise({redirectTo: '/movies'});
}]);
function navshow(){
    var a=document.getElementById('dropdown');
    if( a.style.display==""|| a.style.display=="none"){
        a.style.display = "block";
    }else{
        a.style.display = "none";
    }
}