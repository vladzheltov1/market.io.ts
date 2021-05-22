const mod_database = require('../modules/mod_database');
const mod_serverUtils = require('../modules/mod_serverUtils');

const server = {
    getAll: async (query: string, params: any) => {
        if(typeof params === 'undefined'){
            try{
                mod_database.query(query, (err, results, fields) => {
                    if(err){
                        console.log(err.message);
                    }
                    else{
                        if(results === undefined) return "По данному запросу ничего не найдено";
                        
                        const response = mod_serverUtils.jsonConvert(results[0]);
                        console.log("Router api file: ", response);
                        return response;
                    }
                });
            }
            catch(e){
                console.error(e);
            }
        }
    }
}

module.exports = server;