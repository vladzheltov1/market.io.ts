var mod_database = require('../modules/mod_database');
var mod_serverUtils = require('../modules/mod_serverUtils');
var server = {
    getAll: function (query, params) {
        if (typeof params === 'undefined' || params === []) {
            try {
                mod_database.query(query, function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                    }
                    else {
                        if (results === undefined)
                            return "По данному запросу ничего не найдено";
                        var response = mod_serverUtils.jsonConvert(results[0]);
                        // // console.log("Router api file: ", response);
                        //TODO: Выяснить, почему api возвращает объект, 
                        //      а в модуль приходит undefined
                        return response;
                    }
                });
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            try {
            }
            catch (e) {
                console.error(e);
            }
        }
    }
};
module.exports = server;
