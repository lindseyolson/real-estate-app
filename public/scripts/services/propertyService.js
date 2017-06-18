app.service('PropertyService', function($http){
  var sv = this;

  sv.getProperties = function(){
    return $http.get('/properties').then(function(data){
      console.log('response from server:', data);

      return data.data;
    }); // end $http
  }; // end getProperties
}); // end service
