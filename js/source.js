// Cart Functions
function displayCart() {
    const cartTable = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('cart-subtotal');
    const totalElement = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let total = 0;
    if (!cartTable) return; // Exit if we're not on the cart page
    
    cartTable.innerHTML = '';
    
    if (cart.length === 0) {
        cartTable.innerHTML = '<tr><td colspan="6" style="text-align: center;"><p>Your cart is empty</p><p><a href="/shop.html">Continue Shopping</a></p></td></tr>';
    } else {
        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            
            cartTable.innerHTML += `
                <tr>
                    <td><button onclick="removeFromCart(${index})" style="
                        background-color: #ff4444;
                        color: white;
                        border: none;
                        padding: 5px 15px;
                        border-radius: 20px;
                        cursor: pointer;
                        font-size: 14px;
                        transition: background-color 0.3s ease;
                    ">Remove</button></td>
                    <td><img src="${item.image}" alt="${item.title}" style="width: 60px;"></td>
                    <td>${item.title}</td>
                    <td>₹${item.price}</td>
                    <td>
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)" style="width: 50px;">
                    </td>
                    <td>₹${subtotal}</td>
                </tr>
            `;
        });
    }

    if (subtotalElement) subtotalElement.textContent = '₹' + total;
    if (totalElement) totalElement.textContent = '₹' + total;
}

function removeFromCart(index) {
    try {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart(); // Refresh the cart display
    } catch (error) {
        console.error('Error removing item from cart:', error);
    }
}

function updateQuantity(index, newQuantity) {
    try {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity = Math.max(1, parseInt(newQuantity) || 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    } catch (error) {
        console.error('Error updating quantity:', error);
    }
}

function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some items before checking out.');
        return;
    }
    // Add checkout logic here
    alert('Proceeding to checkout...');
    // You can redirect to a checkout page or implement your checkout logic
}

// Products Data
const products = {
    '1': {
        title: 'T-shirt',
        price: 299,
        image: 'https://media.istockphoto.com/id/587783998/photo/close-up-of-a-t-shirt.jpg?s=1024x1024&w=is&k=20&c=i0_NxNwqfWf5r76xhaVQ7MaQdWdKAy1y_F5Is3uwyFg='
    },
    '2': {
        title: 'Full Seleeve T-shirt',
        price: 399,
        image: 'https://images.unsplash.com/photo-1618354691321-e851c56960d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80'
    },
    '3': {
        title: 'Hoodies',
        price: 599,
        image: 'https://images.unsplash.com/photo-1616150840617-a0124ea42a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80'
    },
    '4': {
        title: 'Coat for Womens',
        price: 999,
        image: 'https://media.istockphoto.com/id/1222396502/photo/gorgeous-young-female-in-classic-suit-black-shoes-and-grey-coat-vintage-chair-womans-clothes.jpg?s=1024x1024&w=is&k=20&c=QuLFE2xi9ZA81cjnGPF76otE_UCvxRTIrW0_O2aEwX4='
    },
    '5': {
        title: 'Black T-shirt',
        price: 349,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60'
    },
    '6': {
        title: 'Frock for Girls',
        price: 699,
        image: 'https://media.istockphoto.com/id/1406303920/photo/womens-sweatpants-sport.jpg?s=612x612&w=0&k=20&c=TxvH1nr7-w_ZtF8hymcDlR_iykcHJtn-enqUx1Kv9a8='
    },
    '7': {
        title: 'Tops for Girls',
        price: 449,
        image: 'https://www.fablestreet.com/cdn/shop/products/cotton_round_neck_knitted_fit_and_flare_dress_l1_0c2f9892-9a92-4673-9021-c7cbc0a948e6_1300x.jpg?v=1613100761'
    },
    '8': {
        title: 'Tops for Girls',
        price: 449,
        image: 'https://www.fablestreet.com/cdn/shop/products/v_neck_floral_fit_and_flare_dress_l1_1300x.jpg?v=1690290104'
    },
    '9': {
        title: 'Frocks',
        price: 799,
        image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/2/tr:w-960,/12e1034TWDR705.jpg?rnd=20200526195200'
    },
    '10': {
        title: 'Frocks for Kids',
        price: 499,
        image: 'https://m.media-amazon.com/images/I/718J1laiICL._AC_UY1100_.jpg'
    },
    '11': {
        title: 'Womens Top',
        price: 399,
        image: 'https://img3.junaroad.com/uiproducts/19670369/zoom_0-1681130955.jpg'
    },
    '12': {
        title: 'T-shirts',
        price: 299,
        image: 'https://img3.junaroad.com/uiproducts/20165393/zoom_0-1691736139.jpg'
    },
    '13': {
        title: 'Cotton T-shirts',
        price: 349,
        image: 'https://img3.junaroad.com/uiproducts/19514453/zoom_0-1678805803.jpg'
    },
    '14': {
        title: 'Trousers',
        price: 599,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80'
    },
    '15': {
        title: 'Cut T-shirts',
        price: 249,
        image: 'https://media.istockphoto.com/id/173867932/photo/red-football-shirt.jpg?s=1024x1024&w=is&k=20&c=qggoJiI6Ldj6WkBn744yjaYSqfl82d1-9ZnBARKXFGc='
    }
};

function addToCart(productId) {
    try {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = products[productId];
        
        if (!product) {
            console.error('Product not found:', productId);
            return;
        }

        const existingItemIndex = cart.findIndex(item => item.id === productId);
        
        if (existingItemIndex >= 0) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({
                id: productId,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        window.location.href = '/cart.html';
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
        }
    } catch (error) {
        console.error('Error updating cart count:', error);
    }
}

// Initialize cart functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Add click handlers to all cart icons
    document.querySelectorAll('.ai').forEach(cartIcon => {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productId = this.getAttribute('data-product-id');
            if (productId) {
                addToCart(productId);
            }
        });
    });
});

// Cart Functionality

// Cart functionality
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products[productId];
    
    if (product) {
        const existingItemIndex = cart.findIndex(item => item.id === productId);
        
        if (existingItemIndex >= 0) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({
                id: productId,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        window.location.href = '/cart.html';
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

// Initialize cart count when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Add click handlers to all cart icons in product list
    document.querySelectorAll('.ai').forEach(function(cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productLink = this.closest('a[href^="singleproduct.html"]');
            if (productLink) {
                const productId = new URLSearchParams(productLink.href.split('?')[1]).get('product');
                if (productId) {
                    addToCart(productId);
                }
            }
        });
    });
});

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Initialize cart count when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Add click handlers to all cart icons
    document.querySelectorAll('.ai').forEach(function(cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get product ID from the closest product container
            const productLink = this.closest('a[href^="singleproduct.html"]');
            if (productLink) {
                const productId = new URLSearchParams(productLink.href.split('?')[1]).get('product');
                if (productId) {
                    addToCart(productId);
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const productImage = document.getElementById('product-image');
    const productTitle = document.getElementById('product-title');
    updateCartCount();

    // Get the product ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    // Display the product details based on the product ID
    if (productId && products[productId]) {
        const product = products[productId];
        productImage.src = product.image;
        productTitle.textContent = product.title;
    } else {
        // Handle cases where the product ID is not valid
        productTitle.textContent = 'Product Not Found';
    }
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
var mainimg = document.getElementById("product-image");
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function () {
    mainimg.src = smallimg[0].src;
};

smallimg[1].onclick = function () {
    mainimg.src = smallimg[1].src;
};

smallimg[2].onclick = function () {
    mainimg.src = smallimg[2].src;
};

smallimg[3].onclick = function () {
    mainimg.src = smallimg[3].src;
};

function performSearch() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim();

    if (query !== "") {
        // Redirect to the search results page with the query as a parameter
        window.location.href = `/shop.html?query=${encodeURIComponent(query)}`;
    }
}