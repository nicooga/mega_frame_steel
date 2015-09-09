(function() {
  'use strict';
  
  angular
    .module('megaFrameSteelApp')
    .service('Mandrill', Mandrill);

    function Mandrill($http) {
      return { send: send };

      function send(mail) {
        var senderEmail = mail.sender,
            body        = mail.body,
            subject     = mail.subject;

        return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', {
          key:     'TD5bGq3aBAMa-3w3Xgwjkw',
          message: {
            from_email: senderEmail,
            to:         [{ email: this.recipient, type: 'to' }],
            autotext:   'true',
            subject:    subject,
            html:       body
          }
        });
      }
    }
})();
