window.listCategory = function ($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/categorys";
    // Khởi tạo hàm
    $scope.getCategorys = function () {
      $http.get(apiUrl).then(function ($response) {
        $scope.categorys = $response.data;
      });
    };
    $scope.getCategorys(); // Gọi hàm
    $scope.onDelete = function (id) {
      if (confirm("Bạn có chắc chắn muốn xóa này?")) {
        $http.delete(`${apiUrl}/${id}`).then(function ($response) {
            $scope.getCategorys(); 
          }).then(alert("Xóa thành công!"));
      }
    };
    $scope.onDetail = function (id) {
      $location.path(`/detailCategory/${id}`);
    };
  };
  