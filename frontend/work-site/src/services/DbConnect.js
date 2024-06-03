const api_url = 'http://127.0.0.1:8000';

const getAllProducts = async () => {
    const url = api_url + '/products';

    let data = await fetch(url)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);

    return data;
};

export { getAllProducts };
