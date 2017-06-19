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
  vm.showConfirm = false;

  vm.getProperties = function() {
    PropertyService.getProperties().then(function(data){
      vm.properties = data;
    });
  }; // end getProperties function

  vm.newProperty = function() {
      var newProperty = {
        cost: vm.inputCost,
        rent: vm.inputRent,
        city: vm.inputCity,
        sqft: vm.inputSqft
      };
      PropertyService.newProperty(newProperty);
      vm.showConfirm = true;
      // vm.getProperties();
  }; //end newProperty function

  vm.deleteProperty = function(index) {
    var id = vm.properties[index]._id;
    console.log(id);
    PropertyService.deleteProperty(id);
    // vm.getProperties();
  }; // end deleteProperty function

  vm.saleRentToggle = function() {
    vm.showCost = !vm.showCost;
  }; // end saleRentToggle function

} // end PropertyController
