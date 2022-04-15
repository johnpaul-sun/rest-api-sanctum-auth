class User {
    constructor(email, user){
        this.email = email,
        this.user = user,
        this.score = 0
    }

    login() {
        console.log(`${this.email} has been logged in`)
        return this
    }
    logout(){
        console.log(`${this.email} has been logged out`)
        return this
    }
    updateScore(){
        this.score++
        console.log(`${this.user} score is now ${this.score}`)
        return this
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u=>{
            return u.email != user
        })  
    }
}
//Creating new users
//Extending Class
let admin = new Admin("admin@gmail.com", "Admin")

let userOne = new User("user@one.com", "One")
let userTwo = new User("user@two.com", "Two")

let users = [userOne, userTwo]

/*===========================*/

console.log(`
-------------------------------------------
[+]      Please register new User.      [+]
-------------------------------------------

> ${users[0].email} has been registered.
> ${users[1].email} has been registered.
> There are now ${users.length} users.
> ${JSON.stringify(users)}

------------------------------------------- 
`)
//Method chaining
userOne.login().updateScore().updateScore().updateScore().logout()

console.log(`
-------------------------------------------
`) 

admin.login()

console.log(`> ${admin.user} just deleted a User`)
//Delete user
admin.deleteUser("user@one.com") 

console.log(`
-------------------------------------------

> There are now ${users.length} user/s.
> ${JSON.stringify(users)}
`)

 