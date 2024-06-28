window.addController = function ($scope, $http, $location) {
  var url = "http://localhost:3000/users";
  $scope.onAdd = function () {
    var valid = false;
    if (!$scope.inputValue || !$scope.inputValue.name) {
      valid = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.email) {
      valid = true;
    }

    if (!valid) {
      var newUser = {
        ...$scope.inputValue,
      };
      $http.post(url, newUser).then(
        function (res) {
          $scope.user = res.data;
          $location.path("/list-user"), alert("Add Thành Công");
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
