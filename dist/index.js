"use strict";
function sumAge(user1, user2) {
    return user1.age + user2.age;
}
let userDetails = sumAge({
    name: 'pawan', age: 23
}, {
    name: 'rahul', age: 27
});
console.log(userDetails);
