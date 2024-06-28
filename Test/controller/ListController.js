angular.module('shoppingApp', [])
.controller('ShoppingController', function() {
    var vm = this;

    // Sample products
    vm.products = [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 },
        { name: 'Product 3', price: 30 }
    ];

    vm.cart = [];

    // Function to add product to cart
    vm.addToCart = function(product) {
        vm.cart.push(product);
        alert('Added to cart successfully!');
    };
});
