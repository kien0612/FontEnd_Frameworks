window.detailCategory =function($scope,$http,$routeParams,$location){
    var apiUrl = "http://localhost:3000/categorys"
    var id = $routeParams.id
    $scope.getDetail = function(){
        $http.get(`${apiUrl}/${id}`).then(function($response){
            $scope.category = $response.data;
        })
    }
    $scope.getDetail();
    $scope.onEdit = function () {
        $location.path(`/updateCategory/${id}`);
      };
    
}