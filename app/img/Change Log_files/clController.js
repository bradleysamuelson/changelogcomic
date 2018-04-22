app.controller('comicCtrl', ['$scope', 'Comics', function($scope, Comics) {
  Comics.query(function(res){
    $scope.allPosts = res;

    
    $scope.totalPages = $scope.allPosts.length;
    $scope.firstPage = $scope.totalPages -1;

    
  });


  $scope.expanded = false;
  $scope.expandThumb = function() {
    if ($scope.expanded == false) {
      console.log('expand');
      $scope.expanded = true;
    }
  };
  
  
  $scope.comicData = false;
  $scope.showComicData = function() {
    if ($scope.comicData == false) {
      console.log('data expanded');
      $scope.comicData = true;
    } else {
      console.log('data collapsed');
      $scope.comicData = false;
    }
  };

  $scope.latest = true;
  $scope.getNextComic = function(currentIndex) {
    var nextIndex = currentIndex+1;
    if (nextIndex >= $scope.posts.length) {
       $scope.latest = true;
    }
    return nextIndex;
  }

  $scope.getPrevComic = function(currentIndex) {
    var prevIndex = currentIndex-1;
    if (prevIndex < 0) {
       prevIndex = 0;
    }
    return prevIndex;
  }
  
}]);
