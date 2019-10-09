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
                            var self = this;
                            $scope.productList = response.data.products
                            // this.productList = response.data.products
                            console.log("from component", response.data.products)
                        }, function myError(response) {
                            this.productList = response.statusText
                    });
                 }
            ]     
        });