
class Application {
    constructor(){
        this.users = [];
        
    }

    addExercise(exercise, user){

        this.users[user].completedExercise.push(exercise);
    }

    addSport(sport, user){

        this.users[user].completedSport.push(sport);
    }

    access(viewer, user){

        this.users[user].sharedWith.push(viewer);
    }
}

class User {
    constructor(name, id){
        this.id = id;
        this.name = name;
        this.sharedWith = [String(id)];
        this.completedExercise = [];
        this.completedSport = [] 
    }
}



module.exports = {
    User, Application
}