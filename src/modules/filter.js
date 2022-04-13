import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";
import { hotSaleFilter } from "./filters";

const filter = () => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const checkBoxInput = document.getElementById('discount-checkbox');
    const checkBoxSpan = document.querySelector('.filter-check_checkmark');

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minInput.value, maxInput.value));
        });
    });

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minInput.value, maxInput.value));
        });
    });

    checkBoxInput.addEventListener('change', () => {
        if (checkBoxInput.checked) {
            checkBoxSpan.classList.add('checked');
        } else {
            checkBoxSpan.classList.remove('checked');
        }

        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minInput.value, maxInput.value));
        });
    });
};

export default filter;