window.addEventListener('DOMContentLoaded', () => {
  // Section 1: Event listeners for navigation buttons
  document.querySelector('.hero button').addEventListener('click', () => {
    window.location.href = 'shop.html';
  });

  document.querySelector('#find-tire').addEventListener('click', () => {
    // ...
  });

  document.querySelector('#checkout').addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });

  // Section 3: Event listener for place order button
  document.querySelector('#place-order').addEventListener('click', () => {
    // ...
  });

  // Section 4: Video event listeners
  videos.forEach(video => {
    video.addEventListener('mouseover', () => {
      video.play();
    });
    video.addEventListener('mouseout', () => {
      video.pause();
    });
  });
});

// Section 2: Tire results and display
function displayTireResults() {
  const tireResults = [
    {
      id: 1,
      name: 'Michelin Pilot Sport 4',
      price: 120.00,
      image: 'tire1.jpg'
    },
    {
      id: 2,
      name: 'Goodyear Eagle F1 Asymmetric 3',
      price: 150.00,
      image: 'tire2.jpg'
    },
    // Add more tire results here
  ];

  const tireList = document.querySelector('#tire-list');
  tireResults.forEach((tire) => {
    const tireItem = document.createElement('li');
    tireItem.innerHTML = `
      <img src="${tire.image}" alt="${tire.name}">
      <h3>${tire.name}</h3>
      <p>Price: $${tire.price}</p>
    `;
    tireList.appendChild(tireItem);
  });
}

// Call displayTireResults() when tire results are available
displayTireResults();
