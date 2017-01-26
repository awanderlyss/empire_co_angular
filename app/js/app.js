(function(){
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
    .module('empireCo', ['ngMaterial', 'ui.router']);
>>>>>>> Added app.module dependencyui.router
=======
    .module('empireCo', ['ngMaterial','ngParallax', 'ui.router']);
>>>>>>> Add angular material elements

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
})();
