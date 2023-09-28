const dataBase = [
    {
        user: "Luisc94",
        password: "12345",
        age:"29"
    },
    {
        user: "Matters",
        password: "rusia",
        age:"19"
    },
    {
        user: "Pamela",
        password: "carro",
        age:"30"
    },
    {
        user: "John",
        password: "machinelearning",
        age:"15"
    },
    {
        user: "Lau2000",
        password: "celular",
        age:"17"
    },
    {
        user: "Richard",
        password: "netflix",
        age:"18"
    }
]

function Login(){
    let user = document.getElementById("user").value
 
    let pass = document.getElementById("password").value

    let authenticated = false



    let usuarioAuthenticated

    dataBase.forEach( function(element){
        if (user == element.user && pass == element.password){
            usuarioAuthenticated = element
            authenticated = true
        }
    })

    if (authenticated){

        if (usuarioAuthenticated.age >= 18){
            window.location = "mayor.html"
            alert("Eres mayor de edad")
        } else{
            alert("Eres menor de edad")
        }

    }else{
        alert("datos incorrectos")
    }



}