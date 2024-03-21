function load() {

    let arr = [];

    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
    .then(response => response.json())
    .then(data => {

        arr = Object.values(data.products);

        const sortedData = arr.sort((a, b) => b.popularity - a.popularity);

        const productContainer = document.getElementById('product-container');

        sortedData.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Popularity: ${product.popularity}</p>
            `;
            productContainer.appendChild(card);
        });

    })
    .catch(error => console.error('Error fetching data:', error));
}

load();
