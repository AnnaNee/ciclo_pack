angular.module('cicloPack.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeController'
  });

  $urlRouterProvider.otherwise('/');

});