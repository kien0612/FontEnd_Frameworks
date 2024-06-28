window.AddController = function ($scope,$http,$location) {
    var url = 'http://localhost:3000/teachers';

    $scope.onSubmit = function () {
        var valid = true;

        if (!$scope.input || !$scope.input.id) {
            valid = false;
        }
        if (!$scope.input || !$scope.input.ten) {
            valid = false;
        }
        if (!$scope.input || !$scope.input.gioitinh) {
            valid = false;
        }
        if (!$scope.input || !$scope.input.email) {
            valid = false;
        }

        if (valid) {
            var newTeacher = {
                ...$scope.input
            }
    
            $http.post(url,newTeacher).then(function (res) {
                if (res.status == 201) {
                    alert('Thêm mới thành công');
                    $location.path('/list-teacher');
                }
            })
        } else {
            alert('Dữ liệu không hợp lệ');
        }
        
    }
}