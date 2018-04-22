app.controller( 'pageCtrl', ['$scope', 'Comics', '$http', '$stateParams', function($scope, Comics, $http, $stateParams ) {
  console.log($stateParams);
  Comics.get( {slug: $stateParams.slug}, function(res){
    $scope.post = res;
  })

  

  //next and prev buttons
  $scope.currentPage = $stateParams.slug;
  

 
  
}]);