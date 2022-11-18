const cart = function() {
    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const closeBtn = document.querySelector('.modal-close')

    console.dir(cartBtn);
    console.log(cart);
    console.log(closeBtn);


    cartBtn.addEventListener('click', function() {
        cart.style.display = 'flex'
    })

    closeBtn.addEventListener('click', function() {
        cart.style.display = 'none'
    })
}

cart()