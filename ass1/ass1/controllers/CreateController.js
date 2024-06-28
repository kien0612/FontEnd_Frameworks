
var apiUrl = "http://localhost:3000/product";
app.controller('CreateController', function($scope, $http) {

    $scope.addSp =function(){
        $scope.addObj = {
            ...$scope.inputValue,
            // "name": $scope.inputValue.name,
            // "price": $scope.inputValue.price,
            // "image": $scope.inputValue.image,
            // "des": $scope.inputValue.des
        }
        var check =false;
        if (!$scope.inputValue || !$scope.inputValue.name || !$scope.inputValue.price || !$scope.inputValue.image ||  !$scope.inputValue.des ) {
            check =true;
        }
        if (!check) {
            $http.post(apiUrl,$scope.addObj)
            .then(response => {
                console.log(response.data.data);
                
                if (response.status == 201) {
                    alert("Thêm thành công!!");
                    return document.location = "#!/";
                    // $location.path(`#!/`);
                }
            })
            .catch(error => {
                console.error('Error fetching product detail:', error);
            });
            
        }else{
            alert("Vui lòng nhập lại!!")
        }
    }

    
});