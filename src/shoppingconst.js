function ShoppingCart(cart, items){
        this.cart = cart
        this.items = items;

    ShoppingCart.addItem= function(){
        this.cart.this.items.push(item)
    }
    ShoppingCart.clear= function(){
        this.cart.this.items = []
    }
    ShoppingCart.clone= function() {
        clonedCart = {}
        for (keys in this.cart)
        keys.forEach(function (key) {
            this.cart[key] = clonedCart[key];
        });
        return clonedCart;
    }
}


 

module.exports = {ShoppingCart}