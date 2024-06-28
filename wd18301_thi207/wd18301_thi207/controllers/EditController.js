window.EditController = function ($scope,$http,$routeParams,$location) {
    var url = 'http://localhost:3000/teachers';
    var id = $routeParams.id;

    $http.get(`${url}/${id}`).then(function (res) {
        if (res.status == 200) {
            $scope.input = {
                id: res.data.id,
                ten: res.data.ten,
                gioitinh: res.data.gioitinh,
                email: res.data.email,
            }
        }
    })

    $scope.onEdit = function (id) {
        $location.path(`/edit/teacher/${id}`);
    }

    $scope.onBack = function () {
        $location.path('/list-teacher');
    }

    $scope.onSubmit = function () {
        var updateTeacher = {
            ...$scope.input
        }

        $http.put(
            `${url}/${id}`,
            updateTeacher
        ).then(function (res) {
            if (res.status == 200) {
                alert('Chỉnh sửa thành công');
                $location.path('/list-teacher');
            }
        })
    }
}