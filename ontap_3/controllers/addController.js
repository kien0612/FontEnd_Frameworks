window.addController = function ($scope, $http, $location) {
  var url = "http://localhost:3000/products";
  $scope.onAdd = function () {
    var valid = false;

    if (
      !$scope.inputValue ||
      !$scope.inputValue.id ||
      $scope.inputValue.id < 0
    ) {
      valid = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.name) {
      valid = true;
    }
    if (
      !$scope.inputValue ||
      !$scope.inputValue.price ||
      $scope.inputValue.price < 1000
    ) {
      valid = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.des) {
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
      alert("Dữ liêu không hợp lệ");
    }
  };
};
