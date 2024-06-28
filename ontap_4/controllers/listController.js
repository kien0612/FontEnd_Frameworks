window.listController = function($scope,$http,$location){
    var url = "http://localhost:3000/phones"
    $scope.getPhone = function(){
        $http.get(url).then(function(res){
            $scope.phones = res.data
        })
    }
    $scope.getPhone();
    $scope.onDetail = function(id){
        $location.path(`/detail/phone/${id}`)
    }
    $scope.onDelete = function(id){
        if(confirm('Bạn có muốn xóa ??')){
            $http.delete(`${url}/${id}`).then(function(res){
                $scope.phones = res.data
                $location.path('/list-phone')
                alert('msg');
            })
        }
    }
}