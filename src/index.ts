interface Users {
    name:string,
    age:number
}

function sumAge(user1:Users,user2:Users){
    return user1.age+user2.age
}

let userDetails=sumAge({
    name:'pawan',age:23
},
{
    name:'rahul',age:27
})

console.log(userDetails);