window.EditController =function($scope,$http,$routeParams,$location){
    var apiUrl = "http://localhost:3000/products"
    var id = $routeParams.id
    $scope.getDetail = function(){
        $http.get(`${apiUrl}/${id}`).then(function($response){
            $scope.product = $response.data;
        })
    }
    $scope.getDetail();
    $scope.onEdit = function () {
        $location.path(`/update/${id}`);
      };
    
}