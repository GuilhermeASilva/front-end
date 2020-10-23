var app = angular.module('myApp', []);


app.controller('NameCtrl', function ($scope){
    $scope.items = [];
    $scope.item = {
        name: '',
        type: '',
        amount: ''
    };

    $scope.addItem = function() {
        $scope.items.push($scope.item);

        $scope.item = {
            name: '',
            type: '',
            amount: ''
        };
    };

    $scope.deleteItem = function(index) {
      $scope.items.splice(index, 1);
    };

    $scope.edit = function(item, index){
      $scope.item = item;
      $scope.items.splice(index, 1);
    };
 });