angular.module('shoppingApp', [])
.controller('ShoppingController', function($scope) {
    var vm = this;

    // Initialize cart from localStorage, if available
    if(localStorage.getItem('cart')) {
        vm.cart = JSON.parse(localStorage.getItem('cart'));
    } else {
        vm.cart = [];
    }

    // Sample products
    vm.products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ];

    // Function to add product to cart
    vm.addToCart = function(product) {
        vm.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(vm.cart)); // Save cart to localStorage
        alert('Added to cart successfully!');
    };

    // Function to calculate total price of items in the cart
    vm.getTotal = function() {
        var total = 0;
        for (var i = 0; i < vm.cart.length; i++) {
            total += vm.cart[i].price;
        }
        return total;
    };
});
