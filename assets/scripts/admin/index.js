(function () {
  'use strict';
  var App = angular.module('Plugins')
  .config(function($stateProvider) {
    $stateProvider
    .state('plugins.natfixer', {
      templateUrl : "/plugins/natfixer/views/index.html",
      controller: 'NatFixerCtrl',
      url: '/natfixer',
      title: 'Nat Fixer',
      sidebarMeta: {
        order: 3,
      },
    });
  });
})();
