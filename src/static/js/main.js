let goods = [
    {
        brand: 'Redmi',
        model: 'Note 7',
        price: 10000
    },
    {
        brand: 'Redmi',
        model: 'Note 8',
        price: 11000
    },
    {
        brand: 'Redmi',
        model: 'Note 9',
        price: 12000
    },
    {
        brand: 'Redmi',
        model: 'Note 10',
        price: 13000
    },
];

goods.forEach((el) => {
   el.alias = (`${el.brand} ${el.model}`).replace(/ /g, '-').toLowerCase();
});

if (document.querySelector('.cards')) {
    let cards = document.querySelector('.cards');

    function addCard(el) {
        cards.innerHTML += '' +
            '<li class="cards__item">\n' +
            ' <a class="cards__link" href="/catalog/item/#' + el.alias + '">\n' +
            '  <img class="cards__img" src="static/images/' + el.alias + '.png' + '">\n' +
            '  <h6 class="cards__title">' + el.brand + ' ' + el.model + '</h6>\n' +
            ' </a>\n' +
            ' <div class="cards__bottom">\n' +
            '  <span class="cards__price">' + el.price + ' ₽' + '</span>\n' +
            '  <button class="cards__basket icon icon-cart"></button>\n' +
            ' </div>\n' +
            '</li>';
    }

    goods.forEach((el) => {
        addCard(el);
    });
}

