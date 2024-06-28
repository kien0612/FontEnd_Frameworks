const urlCategory = "http://localhost:3000/categories";

appAdmin.controller("listCategory", function ($scope, $http) {
    $scope.list_category = [];
    $http.get(urlCategory).then(function (res) {
        $scope.list_category = res.data;
        console.log(res.data);
    }), function (res) {
        alert("No data");
    }

    $scope.delete_category = function (id) {
        $http.delete(`${urlCategory}/${id}`).then( function () {
            alert("Delete Success!!");
            return document.location = "#!category/list_category";
            }), function () {
                alert("Delete Fail!!");
        }
    }
})

appAdmin.controller("addCategory", function ($scope, $http) {
    $scope.name = "";

    $scope.add_category = function () {
        $http.post(urlCategory, {
            "name" : $scope.name
        }). then( function () {
            alert("Add success!!");
            return document.location = "#!category/list_category";
        }), function () {
            alert("Add fail!!");
        }
    }   
})

appAdmin.controller("editCategory", function ($scope, $http, $routeParams) {
    $scope.objCate = {};

    $scope.id = $routeParams.id;

    $http.get(`${urlCategory}/${$scope.id}`).then(function(res) {
        $scope.objCate = res.data;
    });

    $scope.editCate = function() {
        var objUpdate = {
            "name": $scope.objCate.name
        };

        // Gửi yêu cầu PUT để cập nhật danh mục
        $http.put(`${urlCategory}/${$scope.id}`, objUpdate).then(
            function() {
                alert("Update success!");
                return document.location = "#!category/list_category";
            },
            function() {
                alert("Update fail!!!!!!!!");
            }
        );
    };
});


