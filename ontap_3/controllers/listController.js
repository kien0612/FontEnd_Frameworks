window.listController = function ($scope, $http, $location) {
  var url = "http://localhost:3000/products";
  $scope.getProduct = function () {
    $http.get(url).then(function (res) {
      $scope.products = res.data;
    });
  };
  $scope.getProduct();
  $scope.onDetail = function (id) {
    $location.path(`/detail/product/${id}`);
  };
  $scope.onEdit = function (id) {
    $location.path(`/update/product/${id}`);
  };
  $scope.onDetele = function (id) {
    if (confirm("Bạn muốn xóa không ?")) {
      $http.delete(`${url}/${id}`).then(function (res) {
        $location.path('/list-product');
        alert('msg');
      });
    }
  };
};
