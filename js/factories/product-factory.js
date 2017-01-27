(function(){
    angular
    .module('empireCo')
    .factory('ProductFactory', function ($resource) {
<<<<<<< HEAD
    return $resource("http://localhost:8080/api/products");
=======
    return $resource("https://empire-co.herokuapp.com/api/products");    
>>>>>>> changed resource url for production environment
});

})();
