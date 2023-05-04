const list = []
const fun = class Shop {
    constructor(title) {
        this.name = title
    }

    save(){
        list.push(this)
    }

    static fetchAll(){
        return list
    }
}

module.exports = fun