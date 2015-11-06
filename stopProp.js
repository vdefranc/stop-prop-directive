app.directive('stopProp', function () {
  return function (scope, elm, attrs) {
    elm.on(attrs.stopProp, function (event) {
        event.stopPropagation();
    });
  };
});