// Add event listener to start shopping button
document.querySelector('.hero button').addEventListener('click', () => {
    window.location.href = 'shop.html';
  });

  // Add event listener to find tire button
document.querySelector('#find-tire').addEventListener('click', () => {
    // Get selected options
    const tireWidth = document.querySelector('#tire-width').value;
    const tireProfile = document.querySelector('#tire-profile').value;
    const wheelSize = document.querySelector('#wheel-size').value;
    const tireType = document.querySelector('#tire-type').value;
    const tireBrand = document.querySelector('#tire-brand').value;
  
    // Redirect to results page with selected options
    window.location.href = `results.html?width=${tireWidth}&profile=${tireProfile}&size=${wheelSize}&type=${tireType}&brand=${tireBrand}`;
  });

  // Add event listener to checkout button
document.querySelector('#checkout').addEventListener('click', () => {
    // Redirect to checkout page
    window.location.href = 'checkout.html';
  });
  
  // Get tire results from server-side API (not implemented)
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
  
  // Display tire results
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


  // Add event listener to place order button
document.querySelector('#place-order').addEventListener('click', () => {
    // Get selected tire and quantity
    const tire = document.querySelector('#tire').value;
    const quantity = document.querySelector('#quantity').value;
  
    // Calculate total price
    const totalPrice = tire.price * quantity;
  
    // Display total price
    document.querySelector('#price').innerHTML = `$${totalPrice.toFixed(2)}`;
  
    // Redirect to payment gateway (not implemented)
    window.location.href = 'payment.html';
  });