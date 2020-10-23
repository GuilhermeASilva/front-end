        angular.module("Provider_Registration", []);
        angular.module("Provider_Registration").controller("Provider_RegistrationCTRL", 
        
        function($scope, $http) {
            $scope.message="Cadastro de Fornecedores";
            $scope.providers=[
                
            ];

            $scope.adicionarFornecedor = function(provider) {

                $http.post('http://localhost:3333/suppliers', provider).then(successCallback, errorCallback)
                
                function successCallback(response){
                    console.log(response.data);
                    
            }
                function errorCallback(error){
                    console.log(error);
    
            }

            };

            $scope.apagarFornecedor = function(providers) {
                $scope.providers = providers.filter(function(provider) {
                    if (!provider.selected) return provider;

                    $http.delete(`http://localhost:3333/supplier/${provider.id}`).then(successCallback, errorCallback)
                
                    function successCallback(response){
                    console.log(response.data);
                    
                }
                    function errorCallback(error){
                    console.log(error);
    
                }

                })
            };

            $scope.temFornecedorSelecionado = function(providers) {
                return providers.some(function (provider){
                    return provider.selected;
                })
            };

            $scope.class1 = "selected";

            $http.get('http://localhost:3333/suppliers').then(successCallback, errorCallback);

                function successCallback(response){
                    let data = response.data.data
                    for (let resp in data){
                        $scope.providers.push(data[resp]);
                    }
                    
            }
                function errorCallback(error){
                    console.log(error);
    
            }
        })
