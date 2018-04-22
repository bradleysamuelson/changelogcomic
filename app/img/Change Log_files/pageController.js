app.controller( 'pageCtrl', ['$scope', 'Comics', '$http', '$stateParams', function($scope, Comics, $http, $stateParams ) {
  console.log($stateParams);
  $http.get('http://www.changelogcomic.com/word/wp-json/wp/v2/posts/?filter[name]=' + $stateParams.slug).success(function(res) {
    $scope.post = res[0];
  });
  

  //next and prev buttons
  $scope.currentPage = $stateParams.slug;
  

 
  
}]);