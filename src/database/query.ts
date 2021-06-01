import { pool } from "./connect";
import { dbErrors } from "../list/db_errors";

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

}

export const db = new Database();