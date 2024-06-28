const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'views/user/home.html',
        controller: 'listCtrl'
    })
    .when("/dang_nhap", {
        templateUrl: 'views/user/login.html',
        controller: 'loginController'
    })
    .when("/dang_ky", {
        templateUrl: 'views/user/register.html',
        controller: "registerCtrl"
    })
    .when("/detail/:id", {
        templateUrl: 'views/user/detail.html',
        controller: "detailCtrl"
    })
    .when("/cart", {
        templateUrl: 'views/user/cart.html',
        controller: "cartCtrl"
    })
});


const appAdmin = angular.module('myAppAdmin', ['ngRoute']);
appAdmin.config(function($routeProvider) {
    $routeProvider
        .when('/category/list_category', {
            templateUrl: 'views/admin/category/list.html',
            controller: 'listCategory'
        })
        .when('/category/add_category', {
            templateUrl: 'views/admin/category/add.html',
            controller: 'addCategory'
        })
        .when('/category/edit_category/:id', {
            templateUrl: 'views/admin/category/edit.html',
            controller: 'editCategory'
        })


        .when('/product/list_product', {
            templateUrl: 'views/admin/product/list.html',
            controller: 'listProduct'
        })
        .when('/product/add_product', {
            templateUrl: 'views/admin/product/add.html',
            controller: 'addProCtrl'
        })
        .when("/product/edit/:id", {
            templateUrl: 'views/admin/product/edit.html',
            controller: 'editProCtrl'
        })
        

});
