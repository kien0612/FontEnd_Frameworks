window.updateController = function ($scope, $http, $location, $routeParams) {
  var apiUrl = "http://localhost:3000/products";
  var id = $routeParams.id;
  $scope.getEdit = function () {
    return $http.get(`${apiUrl}/${id}`);
  };
  $scope.getEdit().then(function (res) {
    $scope.product = res.data;
  });
  $scope.onSub = function () {
    var invalid = false;

    if (!$scope.product || !$scope.product.name) {
      invalid = true;
    }
    if (!$scope.product || !$scope.product.price) {
      invalid = true;
    }
    if (!$scope.product || !$scope.product.des) {
      invalid = true;
    }

    if (!invalid) {
      var newProduct = {
        ...$scope.product,
      };

      $http.put(`${apiUrl}/${id}`, newProduct).then(
        function ($response) {
          if ($response.status == 200) {
            $location.path("/list-product");
            alert("update thành công");
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
