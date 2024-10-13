let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

const cartItemsContainer = document.getElementById('cart-items-container');
const totalPriceElement = document.getElementById('total-price');

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('show');
}

function formatCurrency(amount) {
    return 'Rp ' + amount.toLocaleString('id-ID');
}

function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', totalPrice.toString());
}

function addToCart(productName, productPrice, productImage) {
    const price = parseFloat(productPrice.replace('Rp ', '').replace(/\./g, '').replace(',', '.'));
    const product = { name: productName, price, image: productImage };
    cartItems.push(product);
    totalPrice += price;
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${formatCurrency(item.price)}</p>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
    totalPriceElement.textContent = formatCurrency(totalPrice);
}

function removeItem(index) {
    totalPrice -= cartItems[index].price;
    cartItems.splice(index, 1);
    saveCart();
    updateCartUI();
}

function checkout() {
    if (cartItems.length === 0) {
        Swal.fire('Oops!', 'Your cart is empty!', 'warning');
    } else {
        Swal.fire('Success!', 'Your order has been placed!', 'success');
        cartItems = [];
        totalPrice = 0;
        saveCart();
        updateCartUI();
        closeSidebar();
    }
}

window.addEventListener('load', updateCartUI);

function removeItem(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'This product will be removed from your cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
        if (result.isConfirmed) {
            totalPrice -= cartItems[index].price;
            cartItems.splice(index, 1);
            saveCart();
            updateCartUI();
            Swal.fire(
                'Removed!',
                'The product has been removed from your cart.',
                'success'
            );
        }
    });
}
