app.service('PropertyService', function($http){
  var sv = this;

  sv.getProperties = function(){
    console.log('Service: getProperties function');
    $http.get('/properties').then(function(response){
      console.log('response from server:', response);
    }); // end $http
  }; // end getProperties
}); // end service
