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
      $http.put(`${apiUrl}/${id}`, $scope.product).then(function ($response) {
        if($response.statuts = 201){
            alert("Cập nhật thành công!");
            $location.path('list-phone')
        }
        })
    };
  };