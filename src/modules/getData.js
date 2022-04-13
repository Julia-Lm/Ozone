
const getData = () => {
    return fetch(`https://ozone-8e56a-default-rtdb.europe-west1.firebasedatabase.app/0/goods.json?`)
        .then((response) => response.json());
};

export default getData;