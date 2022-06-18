import {users} from "./data"

function rendering (){
    const data = document.querySelector(".data")
    for (let user of users){
        data.innerHTML += `<li>${user.id}, ${user.name}, ${user.age}, ${user.email}, ${user.country}, ${user.company}, ${user.birthday}</li>`
    }
}

rendering()