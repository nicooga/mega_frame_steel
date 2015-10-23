(function () {
  angular
    .module('megaFrameSteelApp')
    .directive('mailForm', mailForm);

  function mailForm() {
    return {
      link: link,
      templateUrl: 'views/directives/mail_form.html'
    };

    function link(scope, element, attrs) {
      var showCloseButton =
        typeof attrs.showCloseButton === "undefined" ?
          true : scope.$eval(attrs.showCloseButton);

      scope.showCloseButton = showCloseButton;
    }
  }
})();
