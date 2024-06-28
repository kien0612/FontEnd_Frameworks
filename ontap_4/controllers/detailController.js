window.detailController = function ($scope, $http, $location,$routeParams) {
    var url = "http://localhost:3000/phones";
    var id = $routeParams.id

    $scope.getDetail = function(){
        $http.get(`${url}/${id}`).then(function(res){
            $scope.phone =res.data
        })
    }
    $scope.getDetail()
    $scope.onBack = function(){
        $location.path('/list-phone')
    }
    $scope.onEdit = function(){
        $location.path(`/update/phone/${id}`)
    }
}