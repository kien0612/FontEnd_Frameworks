window.UpdateController = function ($scope, $http, $routeParams, $location) {
  var apiUrl = "http://localhost:3000/products";
  var id = $routeParams.id;

  $scope.getEdit = function () {
    return $http.get(`${apiUrl}/${id}`);
  };
  $scope.getEdit().then(function ($response) {
    $scope.product = $response.data;
  });
  $scope.onUpdate = function () {
    var invalid = false;

    if (
      !$scope.product ||
      !$scope.product.name ||
      $scope.product.name.length <= 3
    ) {
      invalid = true;
    }

    if (!$scope.product || !$scope.product.description) {
      invalid = true;
    }

    if (
      !$scope.product ||
      !$scope.product.price ||
      $scope.product.price < 100
    ) {
      invalid = true;
    }
    if (
      !$scope.product ||
      !$scope.product.discount ||
      $scope.product.discount < 100
    ) {
      invalid = true;
    }

    if (!invalid) {
      var updatProduct = {
        ...$scope.product,
      };

      $http.put(`${apiUrl}/${id}`, updatProduct).then(function ($response) {
        if ($response.status === 200) {
          alert("Cập nhật thành công!");
          $location.path("/");
        }
      });
    } else {
      alert("Dữ liệu không hợp lệ");
    }
  };
};
