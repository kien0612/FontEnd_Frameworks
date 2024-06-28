
    app.controller('LoginController', function($scope, $http) {
        var apiUrl = "http://localhost:3000/account";
        $scope.login =function(){
            // var check =false;
            // if (!$scope.inputValue || !$scope.inputValue.name || !$scope.inputValue.price || !$scope.inputValue.image ||  !$scope.inputValue.des ) {
            //     check =true;
            // }
            // if (!check) {
                
                $http.get(apiUrl)
                .then(response => {

                    response.data.map(e => {
                        // console.log(e.userName);
                        if ($scope.inputValue.userName == e.userName && $scope.inputValue.pass == e.pass) {
                            return document.location = "./admin/index.html";
                            
                        }else{
                            alert('khong oke');

                        }
                    });
                        
                        
                })
                .catch(error => {
                    console.error('Error fetching product detail:', error);
                });
                
            // }else{
            //     alert("Vui lòng nhập lại!!")
            // }
        }

        
    });