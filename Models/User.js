class User{
    constructor(id, email, username) {
        this.id = id;
        this.email = email;
        this.username = username;
    }


    setUser(email, username) {
        this.email = email;
        this.username = username
    }
}
 //change 

module.exports = User;