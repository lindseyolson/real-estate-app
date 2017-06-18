var app = angular.module ('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/for-sale.html',
    controller: 'PropertyController as pc'
  }).when('/for-rent', {
    templateUrl: 'views/partials/for-rent.html',
    controller: 'PropertyController as pc'
  }).when('/add-property', {
    templateUrl: 'views/partials/add-property.html',
    controller: 'PropertyController as pc'
  }).when('/for-sale', {
    templateUrl: 'views/partials/for-sale.html',
    controller: 'PropertyController as pc'
  });
});

app.controller('PropertyController', PropertyController);

function PropertyController( PropertyService ) {
  var vm = this;

  vm.getProperties = function() {
    PropertyService.getProperties().then(function(data){
      vm.properties = data;
    });
  }; // end getProperties function
} // end PropertyController
