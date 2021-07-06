const fs = require('fs');

class File {
    move(oldDir, newDir) {
        return new Promise((resolve, reject) => {
            fs.rename(oldDir, newDir, (error) => {
                if (error) throw new Error(error);

            })
        })
            .then(data => data)
            .catch(error => console.log(error));
    }
}

export const file = new File();