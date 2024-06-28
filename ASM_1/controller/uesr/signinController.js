window.signinController = function ($scope, $http, $location) {
    var apiUrl = 'http://localhost:3000/uesr'; 
    
    $scope.onSignin = function () {
        var invalid = false; 
        
       
        if (!$scope.inputValue || !$scope.inputValue.email || !isValidEmail($scope.inputValue.email)) {
            invalid = true;
        }

        if (!$scope.inputValue || !$scope.inputValue.pass || $scope.inputValue.pass.length < 6) {
            invalid = true;
        }

        if (!invalid) {
            var newUser = {
                ...$scope.inputValue
            }
    
            $http.get(apiUrl)
                .then(response => {

                    response.data.map(e => {
                       
                        if ($scope.inputValue.email == e.email && $scope.inputValue.pass == e.pass) {
                            $location.path('/');
                            alert('Đăng nhập thành công') 
                        }
                    });
                        
                        
                })
                .catch(error => {
                    console.error('Error fetching product detail:', error);
                });
        } else {
            alert('Dữ liệu không hợp lệ')
        }
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); // Trả về kết quả của phép kiểm tra
    }
}
