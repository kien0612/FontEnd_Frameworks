window.listController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/products";
  $scope.listProduct = function () {
    $http.get(apiUrl).then(function ($response) {
      $scope.products = $response.data;
    });
  };
  $scope.listProduct();
  $scope.onDelete = function (id) {
    if (confirm("Bạn có muốn xóa không")) {
      $http
        .delete(`${apiUrl}/${id}`)
        .then(function () {
          $scope.listProduct();
        })
        .then(alert("Xóa Thành Công"));
    }
  };
  $scope.onDetail = function (id) {
    $location.path(`/detail/product/${id}`);
  };
};
