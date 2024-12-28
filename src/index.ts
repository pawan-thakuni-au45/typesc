// interface Users {
//     name:string,
//     age:number
// }

// function sumAge(user1:Users,user2:Users){
//     return user1.age+user2.age
// }

// let userDetails=sumAge({
//     name:'pawan',age:23
// },
// {
//     name:'rahul',age:27
// })

// console.log(userDetails);


interface User{
    id:string,
    name:string,
    password:string,
    email:string
}
//WE CAN CHOOSE SET OF PROPERTIES BY USING "PICK"
type updateUser=Pick<User ,'name'|'password'|'email'>

//we can choose properties optionally by using "PARTIAL API"
type updateUserOptional=Partial<updateUser>

function updateuserDetail(updateUser:updateUser){


}
updateuserDetail({name:'2322',password:"feefefe",email:'ffef'})