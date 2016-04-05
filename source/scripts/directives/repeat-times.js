(function () {
  angular
    .module('megaFrameSteelApp')
    .directive('repeatTimes', repeatTimes);

  function repeatTimes($window, $compile) {
    return { link: link };

    function link (scope, element, attrs) {
      var times    = scope.$eval(attrs.repeatTimes),
          template = element.clone().removeAttr('repeat-times');

      for(i=0; i < times; i++) {
        var _scope = angular.extend(scope.$new(), { '$index': i });
        var html = $compile(template.clone())(_scope);

        html.insertBefore(element);
      }

      element.remove();
    }
  }
})();
