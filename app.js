// 1. Seller’s WhatsApp number (no “+” or “–”)
const WHATSAPP_NUMBER = '18137291470'; //+1 813 729 1470

// 2. Your product list
const products = [
  { id: 1, name: 'Widget A', price: 25, img: 'images/image17.jpg' },
  { id: 2, name: 'Gadget B', price: 40, img: 'images/image18.jpg' },
  // …add more items here
];

const grid = document.getElementById('product-grid');

// 3. Render product cards
products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p>Price: \$${p.price.toFixed(2)}</p>
    <label>
      Qty: <input type="number" min="1" value="1" id="qty-${p.id}">
    </label>
    <button id="buy-${p.id}">Chat on WhatsApp</button>
  `;
  grid.appendChild(card);

  document.getElementById(`buy-${p.id}`)
    .addEventListener('click', () => {
      const qty = document.getElementById(`qty-${p.id}`).value;
      const text = encodeURIComponent(
        `Hi! I’d like to order ${p.name} (×${qty}) — \$${(p.price*qty).toFixed(2)}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    });
});
