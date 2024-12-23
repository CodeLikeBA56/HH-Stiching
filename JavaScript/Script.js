// const navBar = document.querySelector('.navbar');
// let prevScrollPosition = window.scrollY;

// window.addEventListener('scroll', () => {
//     let currentScrollPosition = window.scrollY;
//     currentScrollPosition = Math.max(0, currentScrollPosition);

//     if (currentScrollPosition > prevScrollPosition)
//         navBar.style.transform = `translateY(-105%)`;
//     else
//         navBar.style.transform = `translateY(0%)`;

//     prevScrollPosition = currentScrollPosition;
// });

const products = [
    { image: '../Assets/item-1.jpg' },
    { image: '../Assets/item-2.jpg' },
    { image: '../Assets/item-3.jpg' },
    { image: '../Assets/item-4.jpg' },
    { image: '../Assets/item-5.jpg' },
    { image: '../Assets/item-6.jpg' },
    { image: '../Assets/item-7.jpg' },
];

const product_section = document.querySelector('.product-list');

products.map(item => {
    const div = document.createElement('div');
    div.classList.add('product-item');
    
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = "Product Image";
    img.style.objectFit = "contain";
    img.style.width = "100%";
    img.style.height = "100%";

    div.appendChild(img);
    product_section.appendChild(div);
});
