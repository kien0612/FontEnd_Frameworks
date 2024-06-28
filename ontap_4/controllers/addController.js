window.addController = function ($scope, $http, $location) {
  var url = "http://localhost:3000/phones";
  $scope.onAdd = function () {
    var valid = false;
    if (
      !$scope.inputValue ||
      !$scope.inputValue.id ||
      $scope.inputValue.id < 0
    ) {
      valid = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.ten) {
      valid = true;
    }
    if (
      !$scope.inputValue ||
      !$scope.inputValue.gia ||
      $scope.inputValue.gia < 100
    ) {
      valid = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.hang) {
      valid = true;
    }
    if (!valid) {
      var newPhone = {
        ...$scope.inputValue,
      };
      $http.post(url, newPhone).then(function (res) {
        if (res.status == 201) {
          $scope.phone = res.data;
          $location.path("/list-phone");
          alert("Thêm thành công");
        }
      },function($error){
        console.log($error);
      });
    }else{
        alert('Dữ liệu không hợp lệ');
    }
  };
};
