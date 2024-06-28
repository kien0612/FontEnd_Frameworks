window.updateController = function ($scope, $http, $location, $routeParams) {
  var url = "http://localhost:3000/users";
  var id = $routeParams.id;

  $scope.getDetail = function () {
    return $http.get(`${url}/${id}`);
  };
  $scope.getDetail().then(function (res) {
    $scope.user = res.data;
  });
  $scope.onUpdate = function () {
    var valid = false;
    if (!$scope.user || !$scope.user.name) {
      valid = true;
    }
    if (!$scope.user || !$scope.user.email) {
      valid = true;
    }

    if (!valid) {
      var newUser = {
        ...$scope.user,
      };
      $http.put(`${url}/${id}`, newUser).then(
        function (res) {
          $scope.user = res.data;
          $location.path("/list-user"), alert("Update Thành Công");
        },
        function ($error) {
          console.log($error);
        }
      );
    } else {
      alert("dữ liệu k hợp lệ");
    }
  };
};
