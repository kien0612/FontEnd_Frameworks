window.listController = function($scope,$http,$location){
    var url = "http://localhost:3000/users"
    $scope.listUser = function(){
        $http.get(url).then(function(res){
            $scope.users = res.data
        })
    }
    $scope.listUser();
    $scope.onDetail = function (id){
        $location.path(`/detail/user/${id}`)
    }
    $scope.onEdit = function(id){
        $location.path(`/update/user/${id}`)  
    }
}