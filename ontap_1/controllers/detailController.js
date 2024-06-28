window.detailController = function($scope,$http,$routeParams,$location){
    var url = "http://localhost:3000/users";
    var id = $routeParams.id
    $scope.getDetail = function(){
        $http.get(`${url}/${id}`).then(function(res){
            $scope.user = res.data
        })
    }
    $scope.getDetail();
    $scope.onEdit = function(){
        $location.path(`/update/user/${id}`)  
    }
    $scope.onBack = function(){
        $location.path('/list-user')
    }
}