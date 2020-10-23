        const cadProd = angular.module("Product_Registration", []);
        cadProd.controller("Product_RegistrationCTRL",
        
        function($scope, $http) {
            
            $scope.message="Cadastro de Produtos";
            $scope.products=[
            ];
            

            $scope.typeProducts = [
            {tipo: "Venda", codigo: "01"},
            {tipo: "Estoque", codigo: "02"},
            ];

            $scope.adicionarProduto = function(product) {
            
                $http.post('http://localhost:3333/products', product).then(successCallback, errorCallback)
                
                function successCallback(response){
                    console.log(response.data);
                    
            }
                function errorCallback(error){
                    console.log(error);
    
            }

            };

            $scope.apagarProduto = function(products) {

                $scope.products = products.filter(function(product) {
                    if (!product.selected) return product;

                $http.delete(`http://localhost:3333/product/${product.id}`).then(successCallback, errorCallback)
                
                function successCallback(response){
                    console.log(response.data);
                    
            }
                function errorCallback(error){
                    console.log(error);
    
            }

                })
            };

            $scope.temProdutoSelecionado = function(products) {
                return products.some(function (product){
                    return product.selected;
                })
            };

            $scope.class1 = "selected";

            $http.get('http://localhost:3333/products').then(successCallback, errorCallback);

                function successCallback(response){
                    let data = response.data;
                    for (let resp in data){
                        $scope.products.push(data[resp]);
                    }
            }
                function errorCallback(error){
                    console.log(error);
    
            }
        })