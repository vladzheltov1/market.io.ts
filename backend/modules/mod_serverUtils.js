var serverUtils = {
    jsonConvert: function (json) {
        return (JSON.parse(JSON.stringify(json)));
    }
};
module.exports = serverUtils;
