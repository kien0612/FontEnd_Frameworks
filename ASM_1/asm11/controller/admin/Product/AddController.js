window.AddController = function ($scope,$http,$location) {
    var apiUrl = 'http://localhost:3000/products'; 
    
    $scope.onSubmit = function () {
        var invalid = false; 
        
        if (!$scope.inputValue 
            || !$scope.inputValue.name 
            || $scope.inputValue.name.length <= 3
        ) {
            invalid = true;
        }

        if (!$scope.inputValue || !$scope.inputValue.description) {
            invalid = true;
        }

        if (!$scope.inputValue 
            || !$scope.inputValue.price
            || $scope.inputValue.price < 100
        ) {
            invalid = true;
        }
        

        if (!invalid) {
            var newProduct = {
                ...$scope.inputValue
            }
    
            $http.post(
                apiUrl, 
                newProduct
            ).then(function ($response) {
                if ($response.status == 201) {
                    $location.path(`/`);
                    alert('Add Thành công')
                }
            }, function ($errors) {
                console.log($errors);
            })
        } else {
            alert('Dữ liệu không hợp lệ')
        }
    }
}