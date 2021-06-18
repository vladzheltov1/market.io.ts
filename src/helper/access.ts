/*
    WE CAN CHECK THE USER'S ROLE EVEN SIMPLIER, BECAUSE WE CAN USE CONTEXT FOR CLIENT:

    / * ---------------------------------- * /
        const userData = useContext("userData");
        if(userData.user_role === 2){
            // Do what we want
            // We also can avoid sending too many requests to the server,
            // so it's a better way to do it.
        }
    / * ---------------------------------- * /
    
    MAYBE I SHOULD DEPRECATE IT?
*/

export const access = [];

// How do I use it...?
// access['api'] = function(token){
//     return token == process.env.TOKEN;
// }

access['admin'] = function(user){
    return user !== undefined && user.user_role == 2;
}