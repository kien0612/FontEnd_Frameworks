window.updateController = function($scope,$http,$routeParams,$location){
    var url = "http://localhost:3000/products";
    var id = $routeParams.id

    $scope.getDetail = function(){
        return $http.get(`${url}/${id}`)
    }
    $scope.getDetail().then(function(res){
        $scope.product = res.data
    })

    $scope.onUpdate = function () {
        var valid = false;
    
        if (!$scope.product || !$scope.product.ten) {
          valid = true;
        }
        if (
          !$scope.product ||
          !$scope.product.gia ||
          $scope.product.gia < 1000
        ) {
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

}