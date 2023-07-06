const products = [];

module.exports = class Product {
    constructor(productTitle){
        this.title = productTitle;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}