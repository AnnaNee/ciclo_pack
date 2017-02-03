angular.module('cicloPack.controllers', [])

.controller('homeController', function($scope, $ionicSideMenuDelegate, $cordovaBarcodeScanner) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
        console.log("An error happened -> " + error);
      });
  };
})

.controller('signinController', function($scope) {});
