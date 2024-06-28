window.detailController = function($scope, $http, $location, $routeParams){
    var url = "http://localhost:3000/products"
    var id = $routeParams.id

    $scope.onDetail = function(){
        $http.get(`${url}/${id}`).then(function(res){
            $scope.product = res.data
        })
    }
    $scope.onDetail();
    $scope.onEdit = function(){
        $location.path(`/update/product/${id}`)
    }
    $scope.onBack = function(){
        $location.path(`/list-product`)
    }
}