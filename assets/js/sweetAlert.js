function openModal(imageSrc, title, price) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function addToCart(event, title, price) {
    event.stopPropagation();
    Swal.fire({
        title: 'Item Added to Cart',
        text: `${title} has been added to your cart for ${price}.`,
        icon: 'success',
        confirmButtonText: 'Continue Shopping',
        showCancelButton: true,
        cancelButtonText: 'Checkout'
    }).then((result) => {
        if (result.isConfirmed) {
        } else if (result.isDismissed) {
            Swal.fire('Checkout', 'Proceeding to checkout...', 'info');
        }
    });
}
