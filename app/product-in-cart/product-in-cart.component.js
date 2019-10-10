angular. 
    module('productInCart'). 
        component('productInCart', {
            template: 'TBD: Cart view for <span> {{productId}}</span>',
            controller: ['$routeParams', 
                function ProductInCartController($scope, $routeParams){
                    $scope.productId = $routeParams.productId;
                    console.log($scope.productId);
                }
            ]
        }); 