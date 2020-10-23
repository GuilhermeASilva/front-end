var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/html_angular/login.html'
    })    
    .when('/dashboard', {
        resolve: {
            "check": function($location, $rootScope) {
                if(!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: '/html_angular/dashboard.html'
    })    
    .otherwise( {
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location, $rootScope) {
    $scope.submit = function() {
        if($scope.username == 'admin@123.com' && $scope.password == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        } else {
            alert('Credenciais incorretas.');
        }
    };
});