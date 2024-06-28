window.updateController = function ($scope, $http, $location,$routeParams) {
    var url = "http://localhost:3000/phones";
    var id = $routeParams.id

    $scope.getDetail = function(){
        return $http.get(`${url}/${id}`)
    }
    $scope.getDetail().then(function(res){
        $scope.phone = res.data
    })

    $scope.onSub = function(){

        var valid = false

        if(!$scope.phone || !$scope.phone.id || $scope.phone.id <0){
            valid = true
        }
        if(!$scope.phone || !$scope.phone.ten ){
            valid = true
        }
        if(!$scope.phone || !$scope.phone.hang){
            valid = true
        }
        if(!$scope.phone || !$scope.phone.gia || $scope.phone.gia < 100){
            valid = true
        }

        if(!valid){
            var newPhone = {
                ...$scope.phone
            }
            $http.put(`${url}/${id}`,newPhone).then(function(res){
                if(res.status == 200){
                    $scope.phone = res.data
                    alert('Update thành công');
                    $location.path('/list-phone')
                }
            },function($error){
                console.log($error);
            })
        }else{
            alert('Dữ liệu không hợp lệ');
        }
    }
}
