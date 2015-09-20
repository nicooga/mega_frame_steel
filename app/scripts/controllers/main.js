(function() {
  'use strict';

  angular
    .module('megaFrameSteelApp')
    .controller('Main', Main);

  function Main($mdDialog, $rootScope, $window) {
    var vm = this;

    vm.showMailForm = showMailForm;

    angular.element($window.document, function() {
      vm.scrollToFixedOptions = {
        advantages: {
          bottom: 0,
          marginTop: 94,
          limit: angular.element('#advantages').offset().top
        },
        services: {
          bottom: 0,
          limit: angular.element('#services').offset().top
        },
        gallery: {
          bottom: 0,
          limit: angular.element('#gallery').offset().top
        }
      };
    });

    function showMailForm() {
      $mdDialog.show({
        templateUrl: 'views/mail_form_dialog.html',
        scope:       $rootScope.$new()
      });
    }
  }
})();
