angular.module('cicloPack.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeController'
  })

  .state('sign-in', {
    url: '/',
    templateUrl: 'templates/sign-in.html',
    controller: 'signinController'
  });

  $urlRouterProvider.otherwise('/');

});