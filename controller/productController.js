var app = angular.module("myProductList", ['ngMaterial', 'ngMessages']);

app.controller("myCtrl", function($scope, $http){
    //list of products
    $scope.products = ["Milk", "Bread", "Cheese"];
    // $scope.imagePath = 'view/washedout.png';
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
    $http({
        method: "GET",
        url: "https://demo1064913.mockable.io/products"
    }).then(function mySuccess(response){
            $scope.productList = response.data.products
            console.log(response.data.products)
        }, function myError(response) {
            $scope.productList = response.statusText
    });
});

app.controller('AppCtrl', function($scope) {
    $scope.imagePath = 'img/washedout.png';
  });