window.listController = function($scope,$http,$location,$routeParams){
    var url = "http://localhost:3000/shoes"
    var id = $routeParams.id

    $scope.getDetail = function(){
        $http.get(`${url}/${id}`).then(function(res){
            $scope.shoe  = rzz
        })
    }
}