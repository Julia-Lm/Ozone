import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button');
    const catalofModal = document.querySelector('.catalog');
    const catalofModalItems = document.querySelectorAll('.catalog li');

    let isOpen = false;

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
            catalofModal.style.display = 'block';
        } else {
            catalofModal.style.display = 'none';
        }
    });

    catalofModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;

            getData().then((data) => {
                renderGoods(categoryFilter(data, text));
            });
        });

    });
};

export default catalog;