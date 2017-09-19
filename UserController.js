//after 1.2.25 angular doesn't support global controllers


(function() {
  var app = angular.module("githubViewer");
  
  var UserController = function($scope, github,$routeParams,$location) //$http yerine kendi yazdığımız github servisini ekledim 
  {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos =data;
    //  $location.hash("userInformation");//user information domunun locationunu hashlar
      //$anchorScroll();//hashlediği locationa scrollu getirir. Eğer sayfa küçükse tümü gözükmüyorsa kullanılabilir 
      //$anchorScroll,$locationUI Related services
    };

    var onError = function(reason) {
      $scope.error = "Couldn't fetch the user";
    };
    
   // $http.get("https://api.github.com/users/angular").then(onUserComplete, onError);

   // $scope.message = "Hello angular";

    
    
    $scope.username=$routeParams.username;
    $scope.repoSortOrder="-stargazers_count";
    github.getUser($scope.username).then(onUserComplete,onError);
  };
  app.controller("UserController",  UserController);
  // app.controller("MainController", ["$scope", "$http","$interval","$log", MainController]);
  //bu yukarıdakıne eşit yuarıdakini servislere ayrı isimler vermke istersek kullanıyoruz app.controller(MainController]);
}());

