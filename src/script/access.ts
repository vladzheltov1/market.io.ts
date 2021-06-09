export const access = [];

access['api'] = function(token){
    return token == process.env.TOKEN;
}