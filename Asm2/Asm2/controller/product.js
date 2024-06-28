const urlCate = "http://localhost:3000/categories";
const url = "http://localhost:3000/products";

app.controller("listCtrl", function ($scope, $http) {
    $scope.list_product = [];
    $http.get(url).then(function (res) {
        $scope.list_product = res.data;
    }), function (res) {
        alert("No data");
    }
})


appAdmin.controller("listProduct", function ($scope, $http) {
    $scope.list_product = [];
    $http.get(url).then(function (res) {
        $scope.list_product = res.data;
    }), function (res) {
        alert("No data");
    }

    $scope.delete_product = function (id) {
        $http.delete(`${url}/${id}`).then( function () {
            alert("Delete Success!!");
            return document.location = "#!product/list_product";
        }), function () {
            alert("Delete Fail!!");
        }
    }
})

appAdmin.controller("addProCtrl", function ($scope, $http) {
    $scope.name = "";
    $scope.price = "";
    $scope.img = "";
    $scope.categoryId = ""; 

    $scope.list_category = [];
    $http.get(urlCate).then(function (res) {
        $scope.list_category = res.data;
    }, function (res) {
        alert("No data");
    });

    $scope.add_product = function () {
        var selectedCategory = $scope.list_category.find(function(category) {
            return category.id === $scope.categoryId;
        });


        $http.post(url, {
            "name": $scope.name,
            "category": selectedCategory.name, 
            "price": $scope.price,
            "img":  $scope.img 
        }).then(function () {
            alert("Add success!!");
            return document.location = "#!product/list_product";
        }, function () {
            alert("Add fail!!");
        });
    };  
});




appAdmin.controller("editProCtrl", function ($scope, $http, $routeParams,$location) {
    $scope.ObjPro = [];
    $scope.id = $routeParams.id;

    $http.get(`${url}/${$scope.id}`).then( function(res) {
        $scope.ObjPro = res.data;
        console.log(res);
    })

    $scope.list_category = [];
    $http.get(urlCate).then(function (res) {
        $scope.list_category = res.data;
    }, function (res) {
        alert("No data");
    });
    
    $scope.edit_product = function() {
        
        $scope.objUpdate = {
            "name" : $scope.ObjPro.name,
            "img": $scope.ObjPro.img,
            "price" : $scope.ObjPro.price,
            "category" : $scope.ObjPro.category
        }
        
        $http.put(`${url}/${$scope.id}`, $scope.objUpdate).then (
            function() {
                alert("Update success!");
                $location.path("#!product/list_product");
            }, function() {
                alert("Update fail!!!!!!!!");
            }
        )
    }
})

app.controller('detailCtrl', function($scope, $http, $routeParams) {
    $scope.objDetai = [];
    $scope.id = $routeParams.id;

    $http.get(`${url}/${$scope.id}`).then( function(res) {
        $scope.objDetai = res.data;
    })
});









