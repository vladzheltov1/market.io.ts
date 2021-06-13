
export const access = [];

access['api'] = function(token){
    return token == process.env.TOKEN;
}

access['admin'] = function(user){
    return user !== undefined && user.user_role == 2;
}