angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, $location, Links) {
  $scope.data = {};
  $scope.getLinks = function(data){
    $http.get("/api/links").
      success(function(data, status, headers, config) {
        $scope.linksArr = data;
        console.log(linksArr)
        // console.log(JSON.stringify(data))
      })
  };
    $scope.changeView = function(view){
      $location.path(view); // path not hash
    };
    $scope.getLinks();
});
