window.addController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/products";
  $scope.onSub = function () {
    var invalid = false;

    if (!$scope.inputValue || !$scope.inputValue.name) {
      invalid = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.price) {
      invalid = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.des) {
      invalid = true;
    }

    if (!invalid) {
      var newProduct = {
        ...$scope.inputValue,
      };

      $http.post(apiUrl, newProduct).then(
        function (res) {
          if (res.status == 201) {
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
