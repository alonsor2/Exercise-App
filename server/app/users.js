
class Application {
    constructor(){
        this.users = [];
        
    }

    addExercise(exercise, user){

        this.users[user].completedExercise.push(exercise);
    }

    addFood(food, user){

        this.users[user].foodConsumed.push(food);
    }

    updateUser(user, Uheight, Uweight, Udob, Ufavorites, Usex ){
        this.users[user].height = Uheight;
        this.users[user].wight = Uweight
        this.users[user].dob = Udob;
        this.users[user].sex = Usex;
        this.users[user].hobbies.push(Ufavorites);
    }

    addSport(sport, user){

        this.users[user].completedSport.push(sport);
    }

    access(viewer, user){

        this.users[user].sharedWith.push(viewer);
    }

    login(name, fbid, access_token){
        let user = this.players.find(x=> x.fbid == fbid);
        if(!user){
            user = new User(name, this.users.length, fbid);
            this.users.push(user);
        }
        user.access_token = access_token;
        return user;
    }

    
}

class User {
    constructor(name, id, fbid){
        this.id = id;
        this.name = name;
        this.fbid = fbid;
        this.height = null;
        this.weight = null;
        this.dob = null;
        this.hobbies = [String(null)];
        this.sharedWith = [String(id)];
        this.completedExercise = [];
        this.foodConsumed = [];
        this.completedSport = [] 
    }
}



module.exports = {
    User, Application
}