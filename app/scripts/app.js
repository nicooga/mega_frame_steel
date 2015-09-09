(function() {
  'use strict';

  angular
    .module('megaFrameSteelApp', [
      'ngMaterial',
      'slick'
    ])

    .run(function(Mandrill) {
      Mandrill.recipient = '2112.oga@gmail.com';
    })

    .run(function($rootScope) {
      $rootScope.ENV = {
        siteDomain: 'http://www.megaframesteel.com'
      };
    })

    .config(function($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('light-green');
    });
})();
