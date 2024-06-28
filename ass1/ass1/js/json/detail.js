
// Lấy ra các phần tử cần sử dụng
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const quantitySpan = document.getElementById('quantity');

// Thiết lập sự kiện cho nút giảm
decreaseBtn.addEventListener('click', () => {
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
    }
});

// Thiết lập sự kiện cho nút tăng
increaseBtn.addEventListener('click', () => {
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
});


