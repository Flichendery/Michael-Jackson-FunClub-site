// Список товаров
const items = [
    { title: "Thriller Jacket", price: 89, img: "https://m.media-amazon.com/images/I/61a4VkAhOtL._AC_UY1000_.jpg" },
    { title: "Billie Jean Hat", price: 25, img: "https://i.ebayimg.com/images/g/S7gAAOxy~dNTJEdd/s-l400.jpg" },
    { title: "Smooth Criminal Suit", price: 120, img: "https://m.media-amazon.com/images/I/71l4Kq2W6uL.jpg" },
    { title: "MJ T-Shirt Classic", price: 20, img: "https://www.magic-custom.com/21229-large_default/t-shirt-noir-retro-90-s-vintage-bootleg-michael-jackson-big-face.jpg" },
    { title: "Bad Tour Hoodie", price: 55, img: "https://i.ebayimg.com/images/g/hHoAAOSwuYRg7K4Z/s-l1200.jpg" },
    { title: "King of Pop Cap", price: 22, img: "https://i.etsystatic.com/17035524/r/il/9208de/3264800174/il_fullxfull.3264800174_obth.jpg" }
];

const container = document.getElementById("products");

// Создаём карточки в HTML
items.forEach(item => {
    container.innerHTML += `
        <div class="product-card">
            <div class="img-wrap">
                <img src="${item.img}" width="250" alt="${item.title}">
            </div>
            <h3>${item.title}</h3>
            <div class="price">$${item.price}</div>
            <button style="
                padding: 8px 15px;
                border: none;
                background-color: black;
                color: white;
                border-radius: 5px;
                cursor: pointer;">
                Купить
            </button>
        </div>
    `;
});

