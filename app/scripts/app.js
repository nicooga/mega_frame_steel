(function() {
  'use strict';

  angular
    .module('megaFrameSteelApp', [
      'ngMaterial',
      'slick',
      'smoothScroll',
      'fox.scrollReveal'
    ])

    .run(function(Mandrill) {
      Mandrill.recipient = '2112.oga@gmail.com';
    })

    .constant('ENV', { siteDomain: 'http://www.megaframesteel.com' })
    .run(function($rootScope, ENV) { $rootScope.ENV = ENV; })

    .config(function($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('light-green');
    });
})();
