document.getElementById('add-to-cart').addEventListener('click', function () {
    const productName = document.getElementById('product-name').innerText;
    const productPrice = document.getElementById('product-price').innerText;
    const productImage = document.getElementById('product-image').src;

    Swal.fire({
        title: 'Added to Cart!',
        text: `${productName} has been added to your cart.`,
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then((result) => {
        if (result.isConfirmed) {
            addToCart(productName, productPrice, productImage);
        }
    });
});