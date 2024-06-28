window.listController = function ($scope, $http, $location) {
  var apiUrlProducts = "http://localhost:3000/products";
  // Khởi tạo hàm
  $scope.getProducts = function () {
    $http.get(apiUrlProducts).then(function ($response) {
      $scope.products = $response.data;
    });
  };
  $scope.getProducts(); // Gọi hàm
  $scope.onDetail = function (id) {
    $location.path(`/detail/${id}`);
  };
  var apiUrlUesr = "http://localhost:3000/uesr";
  $scope.getUesrs = function () {
    $http.get(apiUrlUesr).then(function ($response) {
      $scope.Uesrs = $response.data;
    });
  };
  $scope.getUesrs(); // Gọi hàm
  $scope.onDetailUesr = function (id) {
    $location.path(`/profile/${id}`);
  };
};
