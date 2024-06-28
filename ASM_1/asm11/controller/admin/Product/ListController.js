window.ListController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/products";
  // Khởi tạo hàm
  $scope.getProducts = function () {
    $http.get(apiUrl).then(function ($response) {
      $scope.products = $response.data;
    });
  };
  $scope.getProducts(); // Gọi hàm
  $scope.onDelete = function (id) {
    if (confirm("Bạn có chắc chắn muốn xóa này?")) {
      $http.delete(`${apiUrl}/${id}`).then(function ($response) {
          $scope.getProducts(); 
        }).then(alert("Xóa thành công!"));
    }
  };
  $scope.onDetail = function (id) {
    $location.path(`/detail/${id}`);
  };
};
