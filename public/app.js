angular.module('DemoApp', [])
    .service('WebSvc', function ($http, $q) {
        return {
            fetch: function (path) {
                var deferred = $q.defer();
                $http.get(path).then(
                    function success(result) {
                        deferred.resolve(result.data);
                    },
                    function error() {
                        deferred.reject();
                    }
                );
                return deferred.promise;
            },

            fetchMonarchs: function () {
                return this.fetch('/monarchs');
            },
            fetchHouses: function () {
                return this.fetch('/houses');
            }
        };
    })
    .controller('MainCtrl', function ($scope, WebSvc) {
        $scope.search = {};

        $scope.clearSearch = function(){
            $scope.search = {};
        };

        WebSvc.fetchMonarchs().then(function (result) {
            $scope.monarchs = result;
        });

        WebSvc.fetchHouses().then(function (result) {
            $scope.houses = result;
        });
    });