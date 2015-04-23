angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link;
  $scope.addLink = function(data){
    $http.post("/api/links", {url: data}).
      success(function(data, status, headers, config) {
        // console.log(data.url, status);

      }).
      error(function(data, status, headers, config){

      });
    };
  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };
  });
