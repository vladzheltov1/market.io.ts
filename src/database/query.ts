import { dbErrors } from "../list/db_errors";
import { pool } from "./connect";

class Database{
    /* 
        Проверяет, есть ли подключение к базе данных
    */
    isConnected = () => {
        pool('SELECT id FROM users WHERE id = 5', function(err){
            if(err) return false;
            else return true;
        });
    };
    /* 
        Получает на вход sql запрос и параметры (если есть)
        Возвращает все ряды, найденные по этому запросу
    */
    getAll = (query, params = [], callback): any[] | any | null => {

        /* Пустой запрос */
        if(!query) throw new Error(dbErrors.EMPTYQUERY);

        pool.query(query, params, function(error, results: any[]){

            /* Если есть ошибка при обращении к базе */
            if(error){
                callback({error: dbErrors[error.code]});
                return;
            }

            /* Ничего не найдено */
            if(!results[0]){
                callback(null);
                return;
            }

            /* Всё нормально */
            callback(results);

        });
    };
    /* 
        Тоже самое, что и функция выше, но возвращает только один ряд
    */
    getOne = (query, params = [], callback): any[] | any | null => {

        /* Пустой запрос */
        if(!query) throw new Error(dbErrors.EMPTYQUERY);

        pool.query(query, params, function(error, results: any[]){

            /* Если есть ошибка при обращении к базе */
            if(error){
                callback({error: dbErrors[error.code]});
                return;
            }

            /* Ничего не найдено */
            if(!results[0]){
                callback(null);
                return;
            }

            /* Всё нормально */
            callback(results[0]);

        });
    };

    insert = (query, params = [], callback) => {
        /* Пустой запрос */
        if(!query) throw new Error(dbErrors.EMPTYQUERY);

        pool.query("INSERT INTO `users` (`user_firstname`, `user_lastname`, `user_email`, `user_login`, `user_password`, `user_joined`, `user_role`, `user_block_reason`, `user_sex`) VALUES (NULL, 'Василий', 'Пупкин', 'vasiliy', 'vasia@gmail.com', '12345678', CURRENT_DATE(), '1', NULL, '1', NULL)")
    }

}

export const database = new Database();