        angular.module("Customer_Registration", []);
        angular.module("Customer_Registration").controller("Customer_RegistrationCTRL", 
        
        function($scope, $http) {
            $scope.message="Cadastro de Clientes";
            $scope.clients=[];

            $scope.adicionarCliente = function(client) {
                $http.post('http://localhost:3333/costumers', client).then(successCallback, errorCallback)
                
                function successCallback(response){
                    console.log(response.data);
                    
            }
                function errorCallback(error){
                    console.log(error);
    
            }

            };

            $scope.apagarCliente = function(clients) {
                $scope.clients = clients.filter(function(client) {
                    if (!client.selected) return client;

                    $http.delete(`http://localhost:3333/costumer/${client.id}`).then(successCallback, errorCallback)
                
                    function successCallback(response){
                    console.log(response.data);
                    
            }
                    function errorCallback(error){
                    console.log(error);
    
            }

                })
            };

            $scope.temClienteSelecionado = function(clients) {
                return clients.some(function (client){
                    return client.selected;
                })
            };

            $scope.class1 = "selected";

            $http.get('http://localhost:3333/costumers').then(successCallback, errorCallback);

                function successCallback(response){
                    let data = response.data.data;
                    for (let resp in data){
                        $scope.clients.push(data[resp]);
                    }
                    
            }
                function errorCallback(error){
                    console.log(error);
    
            }
        })