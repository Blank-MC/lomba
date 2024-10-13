let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

console.log('Initial cartItems:', cartItems);
console.log('Initial totalPrice:', totalPrice);

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
    console.log('Cart saved:', cartItems);
}

function addToCart(productName, productPrice, productImage) {
    const price = parseFloat(productPrice.replace('Rp ', '').replace(/\./g, '').replace(',', '.'));
    
    console.log('Adding to cart:', { productName, price, productImage });
    
    const product = { name: productName, price, image: productImage };
    cartItems.push(product);
    totalPrice += price;

    saveCart();
    console.log('Item added to cart:', product);
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Keranjang Anda kosong.</p>';
    } else {
        cartItems.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${formatCurrency(item.price)}</p>
                </div>
                <button class="remove-btn" onclick="confirmRemoveItem(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }
    totalPriceElement.textContent = formatCurrency(totalPrice);
}

function confirmRemoveItem(index) {
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
            removeItem(index);
        }
    });
}

function removeItem(index) {
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

function checkout() {
    if (cartItems.length === 0) {
        Swal.fire('Oops!', 'Your cart is empty!', 'warning');
    } else {
        Swal.fire({
            title: 'Success!',
            text: 'Your order has been placed!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                cartItems = [];
                totalPrice = 0;
                closeSidebar();
                window.location.href = 'check-out.html';
            }
        });
    }
}

window.addEventListener('load', updateCartUI);
