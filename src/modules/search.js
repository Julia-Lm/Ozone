import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
    const search = document.querySelector('.search-wrapper_input');

    search.addEventListener('input', (e) => {
        const value = e.target.value;

        getData().then((data) => {
            renderGoods(searchFilter(data, value));
        });
    });

};

export default search;