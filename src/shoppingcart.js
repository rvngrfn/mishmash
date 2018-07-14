class ShoppingCart{
    constructor(cart, items){
        this.cart = cart
        this.items = items;

    }

    addItem(){
        this.cart.this.items.push(item)
    }
    clear(){
        this.cart.this.items = []
    }
    clone() {
        clonedCart = {}
        for (keys in this.cart)
        keys.forEach(function (key) {
          this.cart[key] = clonedCart[key];
        });
        return clonedCart;
    }

}



 

module.exports.ShoppingCart = ShoppingCart