(function(){
<<<<<<< HEAD
<<<<<<< HEAD

  angular
<<<<<<< HEAD
  .module('empireCo', [
    'ui.router'
  ]);
<<<<<<< HEAD
empreCo.config(function($stateProvider, $urlRouterProvider){
  $urlProvider.otherwise('/home');


  $stateProvider

  .state('home',{
      url: '/home',
      templateUrl: 'index.html',
      controller: function($scope){
        $scope.products [gear]
      }
  })
})


  $stateProvider
=======
  .module('empireCo', ['ngMaterial', 'ui.router']);
>>>>>>> Got ui-router to function inside Angular-Material
=======
    "use strict";

    angular
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    .module('empireCo', ['ngMaterial', 'ui.router']);
>>>>>>> Added app.module dependencyui.router
=======
    .module('empireCo', ['ngMaterial','ngParallax', 'ui.router']);
>>>>>>> Add angular material elements
=======
    .module('empireCo', ['ngMaterial','ngParallax', 'ngResource','ui.router']);
>>>>>>> Update merge

  .state('home',{
      url: '/home',
      templateUrl: 'index.html',
      controller: function($scope){
        $scope.products [gear]
      }
  })
})
=======
>>>>>>> UI-View Products
=======
    .module('empireCo', ['ngMaterial','ngParallax', 'ngResource','ui.router'])
<<<<<<< HEAD:app/js/app.js
    .constant('API_URL', 'http://localhost8080/api');
    
>>>>>>> Update merge
=======
    .constant('API_URL', 'http://localhost:8080/api');

>>>>>>> Relocate app directory folders:public/js/app.js
=======

    "use strict";

    angular
    .module('empireCo', ['ngMaterial','ngParallax', 'ngResource','ui.router'])
    .constant('API_URL', 'http://localhost:8080/api');

>>>>>>> Relocate app directory folders
})();