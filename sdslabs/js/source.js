// script.js
document.addEventListener('DOMContentLoaded', function() {
    const productImage = document.getElementById('product-image');
    const productTitle = document.getElementById('product-title');

    // Get the product ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    // Define product data (replace with your own data)
    const products = {
        '1': {
            image: 'https://media.istockphoto.com/id/587783998/photo/close-up-of-a-t-shirt.jpg?s=1024x1024&w=is&k=20&c=i0_NxNwqfWf5r76xhaVQ7MaQdWdKAy1y_F5Is3uwyFg=',
            title: 'Product 1',
        },
        '2': {
            image: 'https://images.unsplash.com/photo-1618354691321-e851c56960d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80',
            title: 'Product 2',
        },
        '3': {
            image: 'https://images.unsplash.com/photo-1616150840617-a0124ea42a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80',
            title: 'Product 3',
        },
        '4': {
            image: 'https://media.istockphoto.com/id/1222396502/photo/gorgeous-young-female-in-classic-suit-black-shoes-and-grey-coat-vintage-chair-womans-clothes.jpg?s=1024x1024&w=is&k=20&c=QuLFE2xi9ZA81cjnGPF76otE_UCvxRTIrW0_O2aEwX4=',
            title: 'Product 4',
        },
        '5': {
            image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
            title: 'Product 5',
        },
        '6': {
            image: 'https://media.istockphoto.com/id/1406303920/photo/womens-sweatpants-sport.jpg?s=612x612&w=0&k=20&c=TxvH1nr7-w_ZtF8hymcDlR_iykcHJtn-enqUx1Kv9a8=',
            title: 'Product 6',
        },
        '7': {
            image: 'https://www.fablestreet.com/cdn/shop/products/cotton_round_neck_knitted_fit_and_flare_dress_l1_0c2f9892-9a92-4673-9021-c7cbc0a948e6_1300x.jpg?v=1613100761',
            title: 'Product 7',
        },
        '8': {
            image: 'https://www.fablestreet.com/cdn/shop/products/v_neck_floral_fit_and_flare_dress_l1_1300x.jpg?v=1690290104',
            title: 'Product 8',
        },
        '9': {
            image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/2/tr:w-960,/12e1034TWDR705.jpg?rnd=20200526195200',
            title: 'Product 9',
        },
        '10': {
            image: 'https://m.media-amazon.com/images/I/718J1laiICL._AC_UY1100_.jpg',
            title: 'Product 10',
        },
        '11': {
            image: 'https://img3.junaroad.com/uiproducts/19670369/zoom_0-1681130955.jpg',
            title: 'Product 11',
        },
        '12': {
            image: 'https://img3.junaroad.com/uiproducts/20165393/zoom_0-1691736139.jpg',
            title: 'Product 12',
        },
        '13': {
            image: 'https://img3.junaroad.com/uiproducts/19514453/zoom_0-1678805803.jpg',
            title: 'Product 13',
        },
        '14': {
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80',
            title: 'Product 14',
        },
        '15': {
            image: 'https://media.istockphoto.com/id/173867932/photo/red-football-shirt.jpg?s=1024x1024&w=is&k=20&c=qggoJiI6Ldj6WkBn744yjaYSqfl82d1-9ZnBARKXFGc=',
            title: 'Product 15',
        },
        // Add more products as needed
    };

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








const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
 