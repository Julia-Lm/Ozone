const postData = (cart) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json());

    // return fetch('http://localhost:3000/goods/24', {
    //   method: 'DELETE',
    // })
    // .then((res) => res.json());
};

export default postData;