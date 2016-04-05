(function() {
  'use strict';

  angular
    .module('megaFrameSteelApp', [
      'ngSanitize',
      'ngMaterial',
      'slick',
      'smoothScroll'
    ])

    .run(function(Mandrill, ENV) {
      Mandrill.recipient = ENV.contact.email;
    })

    .constant('ENV', {
      siteDomain: 'http://www.megaframesteel.com',
      facebookLink: "https://www.facebook.com/Mega-Frame-1061657680553709/",
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
