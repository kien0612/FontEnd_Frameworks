window.AddController = function($scope,$http,$location){
    var apiUrl = "http://localhost:3000/products";
    //khai báo hàm onSubmit
    $scope.onSubmit = function(){
        $http.post(apiUrl,$scope.inputValue).then(function($response){
            if($response.statuts = 201){
                $location.path('list-phone')
            }
        },function($errors){
            console.log($errors);
        })
    }
}