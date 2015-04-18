angular.module('thubApp',['ngRoute'])
.config(function ($routeProvider) {
    
    $routeProvider
        .when('/',{
            templateUrl:'pages/home.html',
            controller:'thubHomeController'
        })
        .when('/work', {
            templateUrl:'pages/work.html',
            controller:'workController'
        })
        .when('/contact', {
            templateUrl:'pages/contact.html',
            controller:'contactController'
        })
        .when('/blog', {
            templateUrl:'blog.html'
        })
})

.controller('thubAppController',function($log,$location,$scope) {
    $log.info($location.path());
})
.controller('thubHomeController',function($log,$location,$scope) {
    $log.info($location.path());
})
.controller('workController',function($log,$location,$scope) {
    $log.info($location.path());
    $scope.workC = "hello";
})
.controller('contactController',function($log,$scope) {
    $scope.workC = "hello";
})
.controller('blogController',function($log,$scope) {
    $scope.workC = "hello";
})

