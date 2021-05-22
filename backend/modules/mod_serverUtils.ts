const serverUtils = {
    jsonConvert: (json) => {
        return(JSON.parse(JSON.stringify(json)))
    }
}

module.exports = serverUtils;