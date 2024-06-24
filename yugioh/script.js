document.getElementById('searchButton').addEventListener('click', function() {
    const cardName = document.getElementById('cardName').value;
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            
            if (data.error) {
                resultsDiv.innerHTML = '<p>No card found.</p>';
                return;
            }

            data.data.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'card';
                cardDiv.innerHTML = `
                    <h2>${card.name}</h2>
                    <p>Type: ${card.type}</p>
                    <p>Race: ${card.race}</p>
                    <p>Level: ${card.level}</p>
                    <img src="${card.card_images[0].image_url}" alt="${card.name}">
                `;
                resultsDiv.appendChild(cardDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching the card data:', error);
            document.getElementById('results').innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
});
