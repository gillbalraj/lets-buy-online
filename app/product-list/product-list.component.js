angular.
    module('productList').
        component('productList', {
            //to serve your code from a webserver and access it on localhost: 
            templateUrl: '/product-list/product-list.template.html',

            controller: [ '$http', '$scope',
                function ProductListController($http, $scope){
                    //fetch data from api
                    $http({
                        method: "GET",
                        url: "https://demo1064913.mockable.io/products"
                    }).then(function mySuccess(response){
                            $scope.productList = response.data.products;
                            $scope.category = response.data.products;
                            $scope.selectedCategory;

                            //test add to cart
                            $scope.productsInCart = [];
                            $scope.addProductsInCart = function (){
                                console.log("add to cart clicked");
            
                                    $scope.productsInCart.push($scope.productList)
                                    console.log($scope.productList)
                               
                            }

                            $scope.getSelectedText = function(){
                                if($scope.selectedCategory !== undefined){
                                    return $scope.selectedCategory.subcategory.name;
                                } else {
                                    return "Categories"
                                }
                            };

                            // this.productList = response.data.products
                            console.log("from component", response.data.products)
                        }, function myError(response) {
                            this.productList = response.statusText
                    });
                 }
            ]                   
                     
        });