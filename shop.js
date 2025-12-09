// Список товаров
const items = [
    { title: "Thriller Jacket", price: 6300, img: "https://m.media-amazon.com/images/I/61a4VkAhOtL._AC_UY1000_.jpg" },
    { title: "Billie Jean Hat", price: 1900, img: "https://i.ebayimg.com/images/g/S7gAAOxy~dNTJEdd/s-l400.jpg" },
    { title: "MJ SC Suit", price: 15500, img: "https://m.media-amazon.com/images/I/71l4Kq2W6uL.jpg" },
    { title: "MJ T-Shirt Classic", price: 1400, img: "https://www.magic-custom.com/21229-large_default/t-shirt-noir-retro-90-s-vintage-bootleg-michael-jackson-big-face.jpg" },
    { title: "Bad Tour Hoodie", price: 5000, img: "https://i.ebayimg.com/images/g/hHoAAOSwuYRg7K4Z/s-l1200.jpg" },
    { title: "King of Pop Cap", price: 1000, img: "https://i.etsystatic.com/17035524/r/il/9208de/3264800174/il_fullxfull.3264800174_obth.jpg" }
];

const container = document.getElementById("products");

// Создаём карточки в HTML
items.forEach(item => {
    container.innerHTML += `
        <div class="product-card">
            <div class="img-wrap">
                <img src="${item.img}" alt="${item.title}"  width="250">
            </div>
            <h3>${item.title}</h3>
            <div class="price">${item.price}₽</div>
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

