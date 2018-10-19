
class Application {
    constructor(){
        this.users = [];
        
    }

    addExercise(exercise, user){

        this.users[user].completedExercise.push(exercise);
    }

    access(viewer, user){

        this.users[user].accessType.push(viewer);
    }
}

class User {
    constructor(name, id){
        this.id = id;
        this.name = name;
        this.completedExercise = [];
        this.accessType
        
    }
}

module.exports = {
    User, Application
}