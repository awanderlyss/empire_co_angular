(function(){

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
