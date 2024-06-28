var apiUrl = "http://localhost:3000/product";
app.controller('DetailController', function($scope, $routeParams, $http) {
    $scope.productId = $routeParams.productId;     
    $http.get(`${apiUrl}/${$scope.productId}`)
        .then(response => {
            if (response.status == 200) {
                $scope.productDetail = response.data;
            }
        })
    
        $scope.updateSp = function(){
            $scope.updateObj ={
                ...$scope.productDetail,
                // "name": $scope.productDetail.name,
                // "price": $scope.productDetail.price,
                // "image": $scope.productDetail.image,
                // "des": $scope.productDetail.des
            }
            var check =false;
            if (!$scope.productDetail || !$scope.productDetail.name || !$scope.productDetail.price || !$scope.productDetail.image ||  !$scope.productDetail.des ) {
                check =true;
            }
            if (!check) {
                $http.put(`${apiUrl}/${$scope.productId}`,$scope.updateObj)
                .then(response => {
                    if (response.status == 200) {
                        alert("Sửa thành công!!");
                        return document.location = "#!/";
                        
                    }
                })
                
            }else{
                alert('Bạn vui lòng nhập lại!!');
            }
        }
        
        
});