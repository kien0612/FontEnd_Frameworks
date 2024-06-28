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
    // var invalid = false;

    // if (
    //   !$scope.inputValue ||
    //   !$scope.inputValue.name ||
    //   $scope.inputValue.name.length <= 3
    // ) {
    //   invalid = true;
    // }

    // if (!$scope.inputValue || !$scope.inputValue.description) {
    //   invalid = true;
    // }

    // if (
    //   !$scope.inputValue ||
    //   !$scope.inputValue.price ||
    //   $scope.inputValue.price < 100
    // ) {
    //   invalid = true;
    // }
    // if (
    //   !$scope.inputValue ||
    //   !$scope.inputValue.discount ||
    //   $scope.inputValue.discount < 100
    // ) {
    //   invalid = true;
    // }

    // if (!invalid) {
    //   var newProduct = {
    //     ...$scope.product,
    //   };

      $http.put(`${apiUrl}/${id}`, $scope.product).then(function ($response) {
        if (($response.status === 200)) {
          alert("Cập nhật thành công!");
          $location.path("/");
        }
      });
    // } else {
    //   alert("Dữ liệu không hợp lệ");
    // }
  };
};
