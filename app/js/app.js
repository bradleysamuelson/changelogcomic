var app = angular.module("clcomic", ['ui.router', 'ngResource', 'ngMessages']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            controller: 'comicCtrl',
            templateUrl: 'app/views/home.tpl.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('comic', {
            url: '/comic/:slug',
            controller: 'comicCtrl',
            templateUrl: 'app/views/comic.tpl.html'      
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('backlog', {
          url: '/backlog',
          controller: 'backlogCtrl',
          templateUrl: 'app/views/backlog.tpl.html'      
        });
        
});


app.factory('Comics', function( $resource) {
  
  return $resource('app/cl-data.json' + '/:slug', {
    slug: '@slug'  
  })

});



app.filter( 'to_trusted', ['$sce', function( $sce ){
  return function( text ) {
    return $sce.trustAsHtml(text);
  }
}])

app.filter('urlencode', function() {
  return function(input) {
    return window.encodeURIComponent(input);
  }
});

