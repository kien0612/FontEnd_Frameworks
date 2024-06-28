var app = angular.module('admin', ['ngRoute']);

app.config($routeProvider => {
  $routeProvider.when('/', {
    templateUrl: 'view/list.html',
    controller: 'ListController'
  })
  .when('/detail/:productId', {
    templateUrl: 'view/detail.html',
    controller: 'DetailController'
  })
  .when('/add', {
    templateUrl: 'view/add.html',
    controller: 'CreateController'
  })
  .when('/update/:productId', {
    templateUrl: 'view/update.html',
    controller: 'DetailController'
  })
})

