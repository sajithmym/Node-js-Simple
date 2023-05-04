const fs = require('fs');
const path = require('path');

class Shop {

    constructor(title) {
        this.name = title
    }

    save() {
        let p = path.join(__dirname, "..", "File", "data.json")
        fs.readFile(p, (err, data) => {
            let Arr = []
            try {
                if (!err)
                Arr = JSON.parse(data)
            } catch (error) {
                1
            }
            Arr.push(this)
            console.log(Arr);
            fs.writeFile(p, JSON.stringify(Arr),(er) => {
                console.log(er);
            })

        })
    }

    static fetchAll() {
        let p = path.join(__dirname, "..", "File", "data.json")
        try {
            let data = fs.readFileSync(p)
            return JSON.parse(data)
        } catch (error) {
            console.error(error);
            return []
        }
    }
    
}

module.exports = Shop; 
