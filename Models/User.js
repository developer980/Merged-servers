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

    
    addUser(value1, value2) {
        this.value1 = value1;
        this.value2 = value2
    }
}

module.exports = User;