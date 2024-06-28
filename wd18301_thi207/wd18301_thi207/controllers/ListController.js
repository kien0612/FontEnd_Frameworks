window.ListController = function ($scope,$http,$location) {
    var url = 'http://localhost:3000/teachers';

    $http.get(url).then(function (res) {
        if (res.status == 200) {
            $scope.teachers = res.data;
        }
    })

    $scope.onAdd = function () {
        $location.path('/teacher/add');
    }

    $scope.onDetail = function (id) {
        $location.path(`/detail/teacher/${id}`);
    }

    $scope.onEdit = function (id) {
        $location.path(`/edit/teacher/${id}`);
    }
}