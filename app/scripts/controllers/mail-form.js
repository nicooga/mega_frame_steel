(function() {
  'use strict';

  angular
    .module('megaFrameSteelApp')
    .controller('MailForm', MailForm);

  function MailForm($mdDialog, Mandrill, $window, ENV, $mdToast) {
    var vm = this;

    // Binded Variables
    vm.mail = {};

    // Binded Functions
    vm.hide = hide;
    vm.send = send;

    // Functions
    function hide() {
      $mdDialog.hide();
      vm.mail = {};
    }

    function send() {
      var mailOpts = {
        sender:  vm.mail.sender,
        subject: '[CONTACTO MegaFrameSteel] ' + vm.mail.name,
        body:    mailToHtml()
      }

      Mandrill.send(mailOpts)
        .then(success)
        .finally(finnaly);

      function success() {
        clear();
        showSuccessToast();
      }

      function finnaly() { hide(); }
    }

    function clear() {
      vm.mail = {};
    }

    function showSuccessToast() {
      var toast = $mdToast.simple()
        .content('Hello!')
        .capsule();

      $mdToast.show(toast);
    }

    function mailToHtml() {
      var template = angular.element('#mail-contents').html(),
          data     = angular.extend({}, vm.mail, { siteDomain: ENV.siteDomain }),
          rendered = $window.Mustache.render(template, data);

      return rendered;
    }
  }
})();
