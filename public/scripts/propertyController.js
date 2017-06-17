var app = angular.module ('app', []);

app.controller('PropertyController', PropertyController);

function PropertyController() {
  var vm = this;

  vm.getProperties = function() {
    console.log('in getProperties function');
  }; // end getProperties function
} // end PropertyController
