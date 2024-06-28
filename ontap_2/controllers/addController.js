window.addController = function ($scope, $http, $location) {
  var url = "http://localhost:3000/products";
  $scope.onAdd = function () {
    var valid = false;

    if (!$scope.inputValue || !$scope.inputValue.ten) {
      valid = true;
    }
    if (
      !$scope.inputValue ||
      !$scope.inputValue.gia ||
      $scope.inputValue.gia < 1000
    ) {
      valid = true;
    }

    if (!valid) {
      var newProduct = {
        ...$scope.inputValue,
      };
      $http.post(url, newProduct).then(
        function (res) {
          if (res.status == 201) {
            $scope.product = res.data;
            $location.path("/list-product");
            alert("Add thành công");
          }
        },
        function ($error) {
          console.log($error);
        }
      );
    } else {
      alert("Dữ liệu không hợp lệ");
    }
  };
};
