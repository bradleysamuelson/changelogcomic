

//  26SiqF1YPRC17KVIlbX4Qf8RUjVf2pQFiZ9Yap5IefinR7aNiC
//  http://api.tumblr.com/v2/blog/bradsamuelson.tumblr.com/posts



app.controller( 'tumblrCtrl', ['$scope', '$http', function($scope, $http ) {
 $http.jsonp('http://api.tumblr.com/v2/blog/bradsamuelson.tumblr.com/posts?api_key=26SiqF1YPRC17KVIlbX4Qf8RUjVf2pQFiZ9Yap5IefinR7aNiC&callback=JSON_CALLBACK').success(function(data) {
     $scope.tposts = data.response.posts;
  });
  
  
 
  
}]);