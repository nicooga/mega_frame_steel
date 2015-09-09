(function() {
  'use strict';

  angular
    .module('megaFrameSteelApp')
    .controller('Main', Main);

  function Main($mdDialog, $rootScope) {
    var vm = this;

    vm.showMailForm = showMailForm;

    function showMailForm() {
      $mdDialog.show({
        templateUrl: 'views/mail_form_dialog.html',
        scope:       $rootScope.$new()
      });
    }
  }
})();
