window.listController= function($scope,$http,$location){
    var url = "http://localhost:3000/products";
    $scope.listProduct = function (){
        $http.get(url).then(function (res){
            $scope.products = res.data
        })
    }
    $scope.listProduct();
    $scope.onDetail = function(id){
        $location.path(`/detail/product/${id}`)
    }
    $scope.onEdit = function(id){
        $location.path(`/update/product/${id}`)
    }
    $scope.onDelete = function(id){
        if(confirm('Bạn có muốn xóa không?')){
            $http.delete(`${url}/${id}`).then(function(res){
                $scope.products = res.data
                alert('Xóa thành công');
            })
        }
    }   
}