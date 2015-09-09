(function() {
  'use strict';
  
  angular
    .module('megaFrameSteelApp')
    .controller('MailForm', MailForm);

  function MailForm($mdDialog, Mandrill, $compile, $rootScope) {
    var vm = this;

    vm.$mail = {};

    vm.hide = hide;
    vm.send = send;
    vm.mailToHtml = mailToHtml;

    function hide() { $mdDialog.hide(); }

    function send() {
      var mail = {
        sender:  vm.$mail.sender,
        subject: '[CONTACTO MegaFrameSteel] ' + vm.$mail.name,
        body:    mailToHtml()
      }

      return

      Mandrill.send(mail)
        .then(success)
        .finally(finnaly);

      function success() { vm.$mail = {}; }
      function finnaly() { hide(); }
    }

    function mailToHtml() {
      var template = "<div ng-include=\"'views/mail_contents.html'\"></div>",
          scope    = angular.extend($rootScope.$new(), { $mail: vm.$mail });
          compiled = $compile(template)(scope);

      console.log(compiled.html());

      return compiled.html();
    }
  }
})();
