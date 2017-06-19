app.service('PropertyService', function($http){
  var sv = this;

  sv.getProperties = function(){
    return $http.get('/properties').then(function(data){
      return data.data;
    }); // end $http
  }; // end getProperties

  sv.newProperty = function(newProperty) {
    return $http({
      method: 'POST',
      url: '/properties',
      data: newProperty
    }); // end $http
  }; // end newProperty

  sv.deleteProperty = function(id) {
    console.log(id);
    return $http({
      method: 'DELETE',
      url: '/properties/' + id
    });
  }; // end deleteProperty

}); // end service
