export const userAdapter = [];

userAdapter['set_client_data'] = function (user_data: object) {
    return {
        _id: user_data['_id'],
        firstname: user_data['user_firstname'],
        lastname: user_data['user_lastname'],
        role: user_data['user_role'],
        avatar: user_data['user_avatar']
    }
}