app.directive('comicNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/js/directives/comic-nav.tpl.html',
    link: function(scope, elem, attrs) {
      $('.comic-nav-container').stick_in_parent({offset_top: 60 });
    }
  }
});