var app =angular.module('myApp',['ngRoute']);


app.config($routeProvider=>{
    $routeProvider.when('/',{
        templateUrl:'view/home.html',
        controller: 'ListController'
    })
    .when('/contact',{
        templateUrl:'view/contact.html'
    })
    .when('/introduce',{
        templateUrl:'view/introduce.html'
    })
    .when('/login',{
        templateUrl:'view/login.html',
        controller: 'LoginController'
    })
    .when('/regiter',{
        templateUrl:'view/regiter.html'
    })
    .when('/detail/:productId',{
        templateUrl:'view/detail.html',
        controller: 'DetailController'
    })
})
