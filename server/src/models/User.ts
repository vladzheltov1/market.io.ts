export class User{
    constructor(userObject){
        for(let key in userObject){
            this[key] = userObject[key];
        }
    }
}