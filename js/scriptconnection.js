const axios = require('axios')

const baseUrl = 'http://localhost:5555'



// axios.post(`${baseUrl}/products`, {
//     "nome": "Qualquer",
//     "marca": "",
//     "cod_barras": "",
//     "preco": 0
// })
//     .then(function(response)
//         console.log(response.data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })


axios.get(`${baseUrl}/products`)
    .then(function(response){
        console.log(response.data)
        const data = response.data
        show(data)
    })
    .catch(function(error){
        console.log(error)
    })

// axios.put(`${baseUrl}/product/`,{"nome": "Rafael"})
//     .then(function(response){
//         console.log(response.data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

// axios.delete(`${baseUrl}/product/10`,{})
//     .then(function(response){
//         console.log(response.data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

function show(users){

    let output = ''

    for(let user of users){
        output += `${user.nome}`
    }

    document.querySelector('main').innerHTML = output
}



