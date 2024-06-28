window.userController = function ($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/uesr";
    // Khởi tạo hàm
    var id = $routeParams.id
    $scope.onDetailUesr = function(){
        $http.get(`${apiUrl}/${id}`).then(function($response){
            $scope.uesr = $response.data;
        })
    }
    $scope.onDetailUesr();
   
    
}

