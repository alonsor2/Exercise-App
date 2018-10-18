
class Application {
    constructor(){
        this.users = [];
        
    }

    addExercise(exercise, user)
    {
        this.users[user].exerciseDone.push(exercise);
    }
}

class User {
    constructor(name, id){
        this.id = id;
        this.name = name;
        this.exerciseDone = [];
        
    }
}

module.exports = {
    User, Application
}