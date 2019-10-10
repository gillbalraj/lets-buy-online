angular.
    module('sowingoApp').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                    when('/products', {
                        template: '<product-list></product-list>'
                    }). 
                    when('/products/:productId', {
                        template: '<product-in-cart></product-in-cart>'
                    }).
                    otherwise('/products');
            }
    ]);