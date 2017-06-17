var app = angular.module ('app', []);

app.controller('PropertyController', PropertyController);

function PropertyController( PropertyService ) {
  var vm = this;

  vm.getProperties = function() {
    PropertyService.getProperties();
  }; // end getProperties function
} // end PropertyController
