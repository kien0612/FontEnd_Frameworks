window.listController = function($scope,$http,$location){
    var url = "http://localhost:3000/shoes"
    $scope.getShoe = function(){
        $http.get(url).then(function(rézz))
    }
}