angular.
    module('productList').
        component('productList', {
            template:
            //print product list and other data needed for tiles 
            '<div class="container-fluid">' +
                '<div class="row">' +
                    '<div class="col-md2">' +
                        '<input ng-model="query.subcategory.name" placeholder="Search by Name"/>' +
                    '</div>' +
                    '<div class="col-md-10">' +
                        '<ul>' +
                            '<h1> Product List </h1>' +
                            '<li ng-repeat="item in productList | filter:query:strict">' +
                            
                                '<md-content class="md-padding" layout-xs="column" layout="row">' +
                                        '<div flex-xs flex-gt-xs="50" layout="column">' +
                                            '<md-card>' +
                                                '<img ng-src="{{item.main_image}}" class="md-card-image" alt="Washed Out">' +
                                                '<md-card-title>' +
                                                    '<md-card-title-text>' +
                                                        '<span class="md-headline">{{item.subcategory.name}}</span>' +
                                                    '</md-card-title-text>' +
                                                '</md-card-title>' +
                                                '<md-card-content>' +
                                                    '<p>' +
                                                        '{{item.description}}'  +
                                                    '</p>'  +
                                                    '<p>{{ item.vendor_inventory[0].list_price}}</p>'  +
                                                '</md-card-content>'  +
                                                '<md-card-actions layout="row" layout-align="end center">'  +
                                                    '<md-button class="md-icon-button" aria-label="Favorite">'   +
                                                        //  <md-icon md-svg-icon="img/icons/favorite.svg"></md-icon> 
                                                    '</md-button>'  +
                                                    '<md-button class="md-raised md-warn">Add To Cart</md-button>'  +
                                                '</md-card-actions>'    +
                                            '</md-card>'    +

                                        '</div>'    +
                                '</md-content>'   +
                            '</li>'  +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</div>'    
            ,
            controller: function ProductListController($scope, $http){
                //fetch data from api
                $http({
                    method: "GET",
                    url: "https://demo1064913.mockable.io/products"
                }).then(function mySuccess(response){
                        $scope.productList = response.data.products
                        // this.productList = response.data.products
                        console.log("from component", response.data.products)
                    }, function myError(response) {
                        this.productList = response.statusText
                });
            }
        });