(function() {
  "use strict";
  var App = angular.module("Plugins");
  App.service("NatfixService", ["$http", "toastr", "CatchHttpError", "$q", function($http, toastr, CatchHttpError, $q) {
    this.get = function() {
      return $http.get("/natfixer-config").catch(CatchHttpError)
    };
    this.update = function(cfg) {
      return $http.post("/natfixer-config", cfg).catch(CatchHttpError)
    }
  }])
})();