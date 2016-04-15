"use strict";
(function (){
  angular
  .module("jargons", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$statProvider",
    "$locationProvider",
    Router
  ]);

  function Router ($statProvider){
    $statProvider
    .state("welcome", {
      url: "/",
      templateUrl: "/assets/html/jargons.welcome.html"
    })
    .state("index", {
      url: "/jargons",
      templateUrl: "/assets/html/jargons.index.html"
    })
    .state("show", {
      url: "/jargons/:id",
      templateUrl: "/assets/html/jargons.show.html"
    });
  }
})();
