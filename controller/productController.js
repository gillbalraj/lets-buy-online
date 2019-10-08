var app = angular.module("myProductList", []);

app.controller("myCtrl", function($scope, $http){
    //list of products
    $scope.products = ["Milk", "Bread", "Cheese"];

    // add new item to list
    $scope.addItem = function(){
        $scope.errorText = ""
        if(!$scope.addProduct) {return}
        if($scope.products.indexOf($scope.addProduct) == -1){
            $scope.products.push($scope.addProduct)
        }else {
            $scope.errorText = "This item already exists in your shopping list"
        }    
    }
    //add item from list
    $scope.deleteItem = function(x){
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }

    //fetch data from api
    $http.get("https://demo1064913.mockable.io/products")
        .then(function mySuccess(response){
            console.log(response.data)
        }, function myError(response) {
            console.log(response.statusText)
        });
});