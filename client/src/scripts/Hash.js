const crypto = require("crypto").createHash('md5');

class Hash {
    async createHash(string) {
        return await crypto.update(string).digest('hex');
    }
}

export const hash = new Hash();