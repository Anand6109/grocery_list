const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#lists');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = product.value;
    const quantity = qty.value;
    const newLI = document.createElement("li");
    newLI.innerText = `${quantity} ${productName}`;
    list.append(newLI);
    form.reset();
});




