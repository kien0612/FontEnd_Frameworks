var apiUrl = "http://localhost:3000/product";
app.controller("ListController",function($scope,$http){
    
    $http.get(apiUrl)
    .then(response=> response.data)
    .then(data =>{
        $scope.listPro = data;
    })

    // $scope.onDetail = function(id){
    //     $location.path(`/detail/${id}`);
    // }

    $scope.deleteSp =function(id){
        if(confirm('Bạn có muốn xoá không!!')){
            $http.delete(`${apiUrl}/${id}`)
            .then(response => {
                if (response.status == 200) {
                    alert("Xóa thành công!!");
                    
                }
            })
            .catch(error => {
                console.error('Error fetching product detail:', error);
            });

        }
    }
})
