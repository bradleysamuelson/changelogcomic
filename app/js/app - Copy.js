var app = angular.module("clcomic", ['ui.router', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            controller: 'comicCtrl',
            templateUrl: 'views/home.tpl.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('comic', {
            url: '/comic/:id',
            controller: 'pageCtrl',
            templateUrl: 'views/comic.tpl.html'      
        });
        
});

app.factory('Comics', function( $resource) {
  return $resource('http://www.changelogcomic.com/word/wp-json/wp/v2/posts' + '/:ID', {
    ID: '@id'
  })
});

app.filter( 'to_trusted', ['$sce', function( $sce ){
  return function( text ) {
    return $sce.trustAsHtml(text);
  }
}])