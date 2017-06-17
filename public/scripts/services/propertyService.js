app.service('PropertyService', function($http){
  var sv = this;

  sv.getProperties = function(){
    return $http.get('/properties').then(function(response){
      console.log('response from server:', response);
    }); // end $http
  }; // end getProperties
}); // end service
