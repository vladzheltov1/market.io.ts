export interface IUser{
    id: number,
    user_firstname: string,
    user_lastname: string,
    user_login: string,
    user_email: string,
    user_avatar: string,
    user_password: string,
    user_joined: string | number,
    user_role: number,
    user_block_reason: string | null,
    user_gender: number
}