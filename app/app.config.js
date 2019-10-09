angular.
    module('sowingoApp').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                    when('/products', {
                        template: '<product-list></product-list>'
                    }). 
                    otherwise('/products');
            }
    ]);