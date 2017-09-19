(function(){
  
    var app = angular.module("githubViewer",["ngRoute"]); //modülü create ederken ihtiycaı olan diğer modülleri köçeli parantez içinde ekliyoruz,ngRoute anguların hazır bir moduülü route script eklenerek kullanılıyor
    
    app.config(function($routeProvider){
      $routeProvider
      .when("/main",{
        templateUrl:"main.html",
        controller:"MainController"
      })
      .when("/user/:username",{
           templateUrl:"user.html",
        controller:"UserController"
      })
         .when("/repo/:username/:reponame",{
           templateUrl:"repo.html",
        controller:"RepoController"
      })
      .otherwise({redirectTo:"/main"});  //anlamsız bir url gelirse maine yönlen
    });
}());
