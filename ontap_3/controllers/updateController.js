window.updateController = function($scope, $http, $location, $routeParams){
    var url = "http://localhost:3000/products"
    var id = $routeParams.id
    $scope.onDetail = function(){
        return $http.get(`${url}/${id}`)
    }
    $scope.onDetail().then(function(res){
        $scope.product = res.data
    })
    $scope.onUpdate = function () {
        var valid = false;
    
        if (
          !$scope.product ||
          !$scope.product.id ||
          $scope.product.id < 0
        ) {
          valid = true;
        }
        if (!$scope.product || !$scope.product.name) {
          valid = true;
        }
        if (
          !$scope.product ||
          !$scope.product.price ||
          $scope.product.price < 1000
        ) {
          valid = true;
        }
        if (!$scope.product || !$scope.product.des) {
          valid = true;
        }
    
        if (!valid) {
          var newProduct = {
            ...$scope.product,
          };
          $http.put(`${url}/${id}`, newProduct).then(
            function (res) {
              if (res.status == 200) {
                $scope.product = res.data;
                $location.path("/list-product");
                alert("Update thành công");
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
}