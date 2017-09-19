(function() {
  var github = function($http) {
    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepoDetails = function(reponame, username) {
      var repo;
      var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

      return $http.get(repoUrl)
        .then(function(response) {
          repo = response.data;
          return $http.get(repoUrl + "/collaborators")
        })
        .then(function(response) {
          repo.collaborators = response.data;
          return repo;
        });

    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };
  };
  var module = angular.module("githubViewer"); //yeni bir module yaratmıyoruz zaten var olan bir modülü bu şekilde referans gösterebiliriz
  module.factory("github", github); //servisi register etmek için kullanılır ilk parametres isim diğeri kullanacağı fonksiyon
}());
