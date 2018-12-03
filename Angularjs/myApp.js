var app = angular.module('lista', []);
    
    app.controller('myCtrl1', function($scope) {
        $scope.names = ["Adrian Hurtado", "Juanma", "Lucia"];
    });