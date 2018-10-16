
class Application {
    constructor(){
        this.users = [];
        
    }
}

class User {
    constructor(name, exercise){
        this.name = name;
        this.exercise = exercise;
        
    }
}

module.exports = {
    User, Application
}