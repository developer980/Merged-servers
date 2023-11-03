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

    
    addUser(param1, param2) {
        this.param1 = param1;
        this.param2 = param2
    }
}

module.exports = User;