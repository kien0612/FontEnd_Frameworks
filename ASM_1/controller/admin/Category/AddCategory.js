window.addCategory = function ($scope,$http,$location) {
    var apiUrl = 'http://localhost:3000/categorys'; 
    
    $scope.onSubmit = function () {
        var invalid = false; 
        
        if (!$scope.inputValue 
            || !$scope.inputValue.name 
            || $scope.inputValue.name.length <= 3
        ) {
            invalid = true;
        }

       
        if (!invalid) {
            var newCategory = {
                ...$scope.inputValue
            }
    
            $http.post(
                apiUrl, 
                newCategory
            ).then(function ($response) {
                if ($response.status == 201) {
                    $location.path(`listCategory`);
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