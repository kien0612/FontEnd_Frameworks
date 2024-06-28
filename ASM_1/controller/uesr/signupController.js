window.signupController = function ($scope, $http, $location) {
    var apiUrl = 'http://localhost:3000/uesr'; 
    
    $scope.onSubmit = function () {
        var invalid = false; 
        
        if (!$scope.inputValue || !$scope.inputValue.name) {
            invalid = true;
        }
        
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
    
            $http.post(
                apiUrl, 
                newUser
            ).then(function ($response) {
                if ($response.status == 201) {
                    $location.path(`signin`);
                    alert('Đăng ký Thành công')
                }
            }, function ($errors) {
                console.log($errors);
            })
        } else {
            alert('Dữ liệu không hợp lệ')
        }
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); // Trả về kết quả của phép kiểm tra
    }
}
