window.updateCategory = function ($scope, $http, $routeParams, $location) {
  var apiUrl = "http://localhost:3000/categorys";
  var id = $routeParams.id;

  $scope.getEdit = function () {
    return $http.get(`${apiUrl}/${id}`);
  };
  $scope.getEdit().then(function ($response) {
    $scope.category = $response.data;
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

    // if (!invalid) {
    //   var newCategory = {
    //     ...$scope.category,
    //   };

      $http.put(`${apiUrl}/${id}`, newCategory).then(function ($response) {
        if ($response.status === 201) {
          alert("Cập nhật thành công!");
          $location.path("listCategory");
        }
      });
    // } else {
    //   alert("Dữ liệu không hợp lệ");
    // }
  };
};
