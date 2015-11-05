(function() {
  'use strict';

  angular
    .module('megaFrameSteelApp', [
      'ngSanitize',
      'ngMaterial',
      'slick',
      'smoothScroll',
      'fox.scrollReveal',
      'scrollToFixed'
    ])

    .run(function(Mandrill) {
      Mandrill.recipient = '2112.oga@gmail.com';
    })

    .constant('ENV', {
      siteDomain: 'http://www.megaframesteel.com',
      facebookLink: "https://www.facebook.com/profile.php?id=100004644345488",
      contact: {
        phone: "11 5855 5216",
        email: "megaframeweb@gmail.com"
      }
    })

    .run(function($rootScope, ENV) { $rootScope.ENV = ENV; })

    .config(function($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('grey', {
          default: '50',
          'hue-1': '400',
          'hue-2': '600',
          'hue-3': '800'
        })
        .accentPalette('light-green')
        .backgroundPalette('grey');
    });
})();
