
var app = angular.module('cinema', []);
app.controller('cinemaController', ["$scope", "$http", function ($scope, $http) {

}]);
var b=document.getElementById('special_nav');
var a=document.getElementById('site_nav');
function toggle1(){
    if( a.style.display==""|| a.style.display=="none"){
        a.style.display = "block";
        b.style.display = "none";
        a.style.color="red";
        b.style.color="black";
    }else{
        a.style.display = "none";
        a.style.color="black";
    }

}
function toggle() {

    if( b.style.display==""|| b.style.display=="none"){
        b.style.display = "block";
        a.style.display = "none";
        b.style.color="red";
        a.style.color="black";
    }else{
        b.style.display = "none";
        b.style.color="black";
    }
}
