app.controller( 'pageCtrl', ['$scope', '$stateParams', 'Comics', function($scope, $stateParams, Comics) {
  console.log($stateParams);
  Comics.get( {slug: $stateParams.slug}, function(res) {
    $scope.post = res;
  });


 
  
}])